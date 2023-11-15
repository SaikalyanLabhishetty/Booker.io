import React from 'react'
import Appheader from './Appheader'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Carousel from 'react-elastic-carousel';
import { locations,breakpoints,property,breakpoints_2 } from './export'

import './Appmain.css'
import Appfooter from './Appfooter';

const Appmain = () => {
    const [text] = useTypewriter({
        words: ['Hotels', 'Apartments', 'Resorts', 'Villas', 'Cabins', 'Cottages', 'Glamping', 'Serviced Apartments', 'Vacation Homes', 'Guest House', 'Hostel', 'Motels'],
        loop: 0
      })
  return (
    <>
    <Appheader/>
    <div className='section-1'>
    <p>
     Booker.io helps you to book 
    <span style={{color:"#C0C0C0",fontSize:"2rem",background:"transparent"}}> {text}</span>
     <Cursor cursorColor='red' />
    </p>
    </div>
    <div className='slider'>
        <h1>Book any where in India</h1>
        <Carousel breakPoints={breakpoints}  className='carousel'>
        {
        locations.map(locat => 
        <div key={locat.id}>
        <img src={locat.image} alt={locat.title} className='place_images'></img>
         <p style={{textAlign:"center"}}>{locat.title}</p>   
        </div>)}
      </Carousel>
    </div>
    <div className='slider-2'>
      <h1>List of properties available</h1>
      <Carousel breakPoints={breakpoints_2}  className='carousel'>
        {
        property.map(prop => 
        <div key={prop.id}>
        <img src={prop.image} alt={prop.name} className='place_images'></img>
         <p style={{textAlign:"center"}}>{prop.name}</p>   
        </div>)}
      </Carousel>
    </div>
    <Appfooter/>
    </>
  )
}

export default Appmain
