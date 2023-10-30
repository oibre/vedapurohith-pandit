import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useAuth, getDocumentsFromFirestore, uploadDataToFirestore } from '../contexts/FirebaseContext';
import styles from '../global/styles';

export default function Home() {
  const [selectedDate, setSelectedDate]:any = useState(null);
  const [selectedSlots, setSelectedSlots]:any = useState({});
  const [loading, setloading]:any = useState(false)

  const {currentUser} = useAuth()

  const dateOptions = [];
  const today = new Date();
  for (let i = 1; i <= 31; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    dateOptions.push({
      value: date,
      label: date.toDateString()
    });
  }

  const timeSlots = Array(24).fill(null).map((_, i) => {
    const hour = i < 10 ? `0${i}` : i;
    return `${hour}:00`;
  });

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    !selectedSlots[date.label] ?
    setSelectedSlots({
      ...selectedSlots,
      [date.label]: []
    }) : null;
  }

  const handleSlotClick = (slot:any) => {
    const slots = selectedSlots[selectedDate.label];
    if (slots.includes(slot)) {
      setSelectedSlots({
        ...selectedSlots,
        [selectedDate.label]: slots.filter((s:any) => s !== slot)  
      });
    } else {
      setSelectedSlots({
        ...selectedSlots,
        [selectedDate.label]: [...slots, slot]
      });
    }
  }

  const handleSubmit = async () => {
    setloading(true)
    await uploadDataToFirestore('panditAvailability', {
      panditId: currentUser.uid,
      availability: selectedSlots
    })
    setTimeout(() => {
      setloading(false)
    }, 1500);
  }

  useEffect(()=>{
    getDocumentsFromFirestore('panditAvailability', 'panditId', '==', currentUser.uid).then((resp:any) => {
      setSelectedSlots(resp[0].availability)
    })
  }, [])

  return (
    <div className="p-6 w-[90%] ml-[5%] bg-white rounded-lg">
      <p className='text-lg font-playfair font-medium mb-[20px]'>Select Date</p>
      <Select 
        options={dateOptions}
        value={selectedDate}
        onChange={handleDateChange}
      />
      {selectedDate && (
        <>
          <p className='text-lg font-playfair font-medium my-[20px]'>Select Available Time</p>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {timeSlots.map(slot => (
              <div 
                key={slot}
                className={`px-4 py-2 border rounded-md text-center cursor-pointer ${selectedSlots[selectedDate.label].includes(slot) ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}
                onClick={() => handleSlotClick(slot)}
              >
                {slot}
              </div>
            ))}
          </div>
        </>
      )}

      <button 
        className={styles.primaryBtn + " mt-[30px] w-full" + (loading ? " bg-gray-500 cursor-not-allowed" : "")}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
