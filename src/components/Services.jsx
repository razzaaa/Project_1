import React from 'react'
import {Carousel} from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'

const Services = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} interval={5000} showThumbs={false}>
        <div>
            <img src={img1} alt="image1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="image2" />
            <p className='legend'>Full DSA Course </p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
