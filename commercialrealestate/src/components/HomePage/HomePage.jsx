import React from 'react'

//pages
import BannerPage from '../BannerPage/BannerPage'


function HomePage() {
  return (
    <div className='w-full h-full'>

        {/* Banner-page */}
        <div className='banner-page'>
            <BannerPage />
        </div>

    </div>
  )
}

export default HomePage