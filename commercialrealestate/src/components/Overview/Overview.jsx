import React, { useState } from 'react'
import { GrDocumentDownload } from "react-icons/gr";
import PopupModel from '../Popup/PopupModel';

function Overview() {

    const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className='w-full pt-20 pb-14 bg-gray-200'>
        <div className='flex flex-col gap-5 justify-center items-center px-2'>
        <h2 className='text-4xl md:text-5xl text-center border-b-2 border-black pb-3 font-semibold w-3/4 md:w-[30%]'>Overview</h2>
        <p className='text-center pt-7 text-xl md:text-3xl'>Indroducing - Wagle Estate Properties.</p>
        <p className=' text-center md:text-xl md:w-[60%]'>We are here to make the property Buying, Selling & Leasing Process easy for you. </p>
        <p className=' text-center md:text-xl md:w-[60%] md:mb-5'>Wagle Estate Properties filters Your requirements and find you a perfect commercial / office spaces / Properties in Wagle Estate, Thane. </p>
        <button onClick={()=>{setPopupOpen(true)}} className='flex justify-between items-center border-b border-slate-400  mb-7 text-2xl bg-indigo-800 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in-out duration-300 '> <GrDocumentDownload className='mr-5 text-3xl'/> Download Brochure</button>
        </div>
        <PopupModel isOpen={isPopupOpen} closePopup ={()=>{setPopupOpen(false)}} pdf={true}/>
    </div>
  )
}

export default Overview