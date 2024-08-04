import React from 'react'

//pages
import BannerPage from '../BannerPage/BannerPage'
import Overview from '../Overview/Overview'
import ProjectShowcasePage from '../ProjectShowcasePage/ProjectShowcasePage'


function HomePage() {
  return (
    <div className='w-full h-full'>

        {/* Banner-page */}
        <div className='banner-page'>
            <BannerPage />
        </div>
        {/* Overview-Page */}
        <section className='sec-1'>
          <Overview />
        </section>    
        <section className='sec-2'>
          <ProjectShowcasePage />
        </section>  
    </div>
  )
}

export default HomePage