import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../component/RelatedDoctors';

const Appointments = () => {
  const { doctorId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const getAvailableSlots = async () => {
    const slots = [];
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
      setDocInfo(foundDoctor || null);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, doctorId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) {
    return <p className="text-center text-gray-600">Loading doctor information or doctor not found...</p>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Doctor Details */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
        <div className="flex-shrink-0">
          <img
            className="bg-primary w-full max-w-xs sm:max-w-sm rounded-lg"
            src={docInfo.image}
            alt={`Dr. ${docInfo.name}`}
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg px-4 sm:px-6 lg:px-8 py-6 bg-white mt-4 md:mt-0">
          <p className="flex items-center gap-2 text-xl sm:text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-4 sm:w-5" src={assets.verified_icon} alt="Verified" />
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
            <p className="text-sm text-gray-500 mt-2 max-w-[700px]">{docInfo.about}</p>
          </div>
          <div className="text-gray-500 font-medium mt-4">
            <p>
              Appointment fee: <span className="text-gray-700">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-6 sm:ml-4 md:ml-8 lg:ml-12 font-medium text-gray-700">
        <p className="text-lg">Booking slots</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-4 rounded-full cursor-pointer focus:ring-2 focus:ring-primary ${
                  slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light px-3 py-2 rounded-full cursor-pointer focus:ring-2 focus:ring-primary ${
                  item.time === slotTime ? 'bg-primary text-white' : 'border border-gray-300 text-gray-900'
                }`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className="bg-primary text-white text-sm font-light px-4 sm:px-8 lg:px-12 py-2 sm:py-3 rounded-full my-6">
          Book an appointment
        </button>
      </div>

      {/* Related Doctors */}
      <RelatedDoctors doctorId={doctorId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointments;
