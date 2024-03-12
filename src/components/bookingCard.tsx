import React from 'react';

const BookingCard = ({ booking }:any) => {
  const { poojaDetails, bookingData } = booking;

  const formatDateString = (inputDateString: any) => {
    const dateObject = new Date(inputDateString);
  
    const options = { weekday: "long", year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = dateObject.toLocaleDateString('en-US');
  
    return formattedDate;
  }
  

  return (
    <div className="border bg-white rounded p-4 mb-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-103">
      <h2 className="text-xl font-semibold">{poojaDetails.name}</h2>
      <p className="text-gray-600 mb-2 mt-2">{poojaDetails.description.length > 80 ? poojaDetails.description.substring(0, 77) + " ..." : poojaDetails.description}</p>
      <p className='mt-5'><strong>Pooja Date:</strong> {formatDateString((new Date(bookingData.bookingDateTime)).toDateString())}</p>
      <p className='mt-5'><strong>Booked On:</strong> {formatDateString((new Date(bookingData.bookedOn.seconds * 1000 + bookingData.bookedOn.nanoseconds / 1e6)).toDateString())}</p>
      <p><strong>Completion Status:</strong> {bookingData.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

export default BookingCard;