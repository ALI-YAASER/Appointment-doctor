
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../component/RelatedDoctors';

const Appointments = () => {
  const { doctorId } = useParams(); // Retrieve doctor ID from URL
  const { doctors, currencySymbol } = useContext(AppContext); // Access doctors from context
  const daysOfweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null); // State to store doctor info
  const [docSlots, setDocSlots] = useState([]); // State to store slots
  const [slotIndex, setSlotIndex] = useState(0); // Selected slot index
  const [slotTime, setSlotTime] = useState(''); // Selected slot time

  const getAvailableSlots = async () => {
    const slots = []; // Collect all slots here
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }

    setDocSlots(slots);
  };

  const fetchDocInfo = async () => {
    if (doctors) {
      const foundDoctor = doctors.find(doc => doc._id === doctorId);
      setDocInfo(foundDoctor || null); // Handle case if doctor isn't found
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, doctorId]); // Fetch doctor info when dependencies change

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]); // Update slots when doctor info changes

  if (!docInfo) {
    return <p>Loading doctor information or doctor not found...</p>;
  }

  return (
    <div>
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-3/4 sm:max-72 rounded-lg"
            src={docInfo.image}
            alt={`Dr. ${docInfo.name}`}
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg px-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full border-gray-700">
              {docInfo.experience}
            </button>
          </div>

          {/* About */}
          <div>
            <p className="flex items-center gap-1 text-sm mt-3 text-gray-900 font-medium">
              About <img src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-500 mt-3 max-w-[700px]">{docInfo.about}</p>
          </div>
          <div className="text-gray-500 font-medium mt-4">
            <p>
              Appointment fee: <span className="text-gray-700">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
          docSlots.length && docSlots.map((item,index)=>(
            <div onClick={()=> setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white':'border border-gray-300'}`}>
              <p>{item[0] && daysOfweek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate() }</p>
            </div>
          ))
        }


        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white':'border border-gray-300 text-gray-900'} `} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-7'>Book an appointment</button>
      </div>
            {/* lesting related Doctors */}
            <RelatedDoctors doctorId={doctorId} speciality={docInfo.speciality} />

    </div>
  );
};

export default Appointments;