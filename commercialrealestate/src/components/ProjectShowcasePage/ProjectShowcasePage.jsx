import React, { useState } from 'react';

// icons
import { IoLocationOutline } from 'react-icons/io5';
import { TbGeometry } from 'react-icons/tb';
import { RiParkingBoxLine } from 'react-icons/ri';
import PopupModel from '../Popup/PopupModel';

export default function ProjectShowcasePage() {

    const [isPopupOpen, setPopupOpen] = useState(false);
  return (
    <div className='min-h-screen w-full pt-28'>
    
      <h2 className='text-2xl md:text-5xl font-semibold text-center border-b-2 border-black mx-8 md:mx-48 pb-4 mb-10 md:mb-20'>
        Commercial Properties for Rent / Lease in Thane
      </h2>

      <div className='grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-12 px-4 md:px-32'>
        {cardDetails.map((det, i) => (
          <ProjectCards
            picture={det.picture}
            propertyName={det.propertyDetails}
            location={det.location}
            area={det.area}
            parking={det.parking}
            key={i}
            openPopup={()=>{setPopupOpen(true)}}
          />
        ))}
      </div>

      <PopupModel isOpen={isPopupOpen} closePopup={()=>{setPopupOpen(false)}} pdf={false}/>

    </div>
  );
}

function ProjectCards({openPopup, picture, propertyName, location, area, parking }) {
  return (
    <div className='rounded-xl col-span-1 md:col-span-6 flex flex-col md:flex-row shadow-lg shadow-black hover:shadow-2xl hover:shadow-black duration-300'>
      <div className='md:min-w-[40%] h-60 md:h-auto rounded-lg overflow-hidden'>
        <img src={picture} className='w-full h-full object-cover' alt='' />
      </div>
      <div className='flex flex-col gap-1 md:gap-3 p-4 md:px-5'>
        <h3 className='text-xl md:text-2xl mt-2 md:mt-5 md:font-semibold'>{propertyName}</h3>
        <div className='border-4 border-black rounded-2xl w-1/6'></div>
        <p className='text-base md:text-xl flex items-center gap-2 text-black/75'>
          <IoLocationOutline /> Location: {location}
        </p>
        <p className='text-base md:text-xl flex items-center gap-2 text-black/75'>
          <TbGeometry /> Area: {area}
        </p>
        <p className='text-base md:text-xl flex items-center gap-2 text-black/75'>
          <RiParkingBoxLine /> Parking: {parking}
        </p>
        <button onClick={openPopup} className='self-start border-b border-slate-400 text-base md:text-2xl bg-indigo-800 text-white font-bold py-2 px-4 md:px-6 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition mt-1 ease-in-out duration-300'>
          Get Best Deals
        </button>
      </div>
    </div>
  );
}

const cardDetails = [
  {
    propertyDetails: 'Office Space available for Rent & Sale in Centrum Business Square, Wagle Industrial Estate',
    location: 'Wagle Estate Thane West',
    area: '398-804 Sq.Ft',
    picture: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    parking: 'Available',
  },
  {
    propertyDetails: 'Office Space available for Rent & Sale in Centrum Business Square, Wagle Industrial Estate',
    location: 'Wagle Estate Thane West',
    area: '398-804 Sq.Ft',
    picture: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    parking: 'Available',
  },
  {
    propertyDetails: 'Office Space available for Rent & Sale in Centrum Business Square, Wagle Industrial Estate',
    location: 'Wagle Estate Thane West',
    area: '398-804 Sq.Ft',
    picture: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    parking: 'Available',
  },
  {
    propertyDetails: 'Office Space available for Rent & Sale in Centrum Business Square, Wagle Industrial Estate',
    location: 'Wagle Estate Thane West',
    area: '398-804 Sq.Ft',
    picture: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg',
    parking: 'Available',
  },
];
