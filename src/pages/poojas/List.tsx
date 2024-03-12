import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase'; // Import your Firebase instance
import { useAuth } from '../../contexts/FirebaseContext';
import LoadingCards from '../../components/loadingCards';
import styles from '../../global/styles';

const List = () => {
  const [userPoojas, setUserPoojas] = useState([]);
  const [loading, setLoading] = useState(true);
  const {auth, currentUser} = useAuth();

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch poojas created by the current user from Firestore
    const fetchUserPoojas = async () => {
      try {
        const poojasRef = db.collection('poojas');
        const query = poojasRef.where('uid', '==', currentUser.uid);
        const querySnapshot = await query.get();

        const userPoojasData:any = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(userPoojas)

        setUserPoojas(userPoojasData);
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      } catch (error) {
        console.error('Error fetching user poojas:', error);
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchUserPoojas();
    }

    // Cleanup effect
    return () => {
      // Cleanup logic if needed
    };
  }, [currentUser]);

  return (
    <div className="container mx-auto p-5 mt-8">
      {
        userPoojas.length !== 0 && <h1 className="text-xl font-semibold mb-6 font-playfair">Your Poojas</h1>
      }

      {loading && <LoadingCards />}

      {!loading && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userPoojas?.map((pooja:any) => (
          <div key={pooja.id} className="bg-white font-playfair shadow-lg p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{pooja.name}</h2>
            <p className="text-gray-600 mb-[40px] mt-[5px]">{pooja.description}</p>
            <img src={pooja.image} className='mb-[40px] max-h-[400px] object-cover w-full  rounded-lg' />
            <p className="text-gray-600 mb-2">Duration: {pooja.duration}</p>
            <p className="text-gray-600 mb-2">Cost: {pooja.cost}</p>
            <button onClick={() => {
              navigate('/edit-poojas/' + pooja.id)
            }} className={styles.primaryBtn + ' mt-[30px]'}>Edit Pooja</button>
          </div>
        ))}
        {
          userPoojas.length === 0 && (
            <div className='flex flex-col items-center justify-center w-full'>
              <p className='text-center mt-[240px] max-w-[85%]'>You have not created any poojas yet. Please click the button below to create a pooja</p>
              <button onClick={() => {navigate('/add-poojas')}} className={styles.primaryBtn + " mt-[50px]"}>
                Create Pooja
              </button>
            </div>
          )
        }
      </div>}
    </div>
  );
};

export default List;
