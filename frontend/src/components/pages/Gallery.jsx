import React from 'react';
// import { MDBLightbox } from 'mdb-react-ui-kit';
// import { MDBMultiCarousel, MDBMultiCarouselItem } from 'mdb-react-multi-carousel';

import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Header from '../HomeComponents/Header';
import Footer from '../HomeComponents/Footer';

export default function App() {
  return (
    <div>
      <Header/>
    <MDBRow className='p-5'>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0 '>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>

      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0 '>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>
   

{/* 
    <MDBLightbox>
      <MDBMultiCarousel lightbox>
        <MDBMultiCarouselItem
          src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp'
          fullscreenSrc='https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp'
          alt='Table Full of Spices'
        />
        <MDBMultiCarouselItem
          src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp'
          fullscreenSrc='https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp'
          alt='Winter Landscape'
        />
        <MDBMultiCarouselItem
          src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp'
          fullscreenSrc='https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp'
          alt='View of the City in the Mountains'
        />
        <MDBMultiCarouselItem
          src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp'
          fullscreenSrc='https://mdbcdn.b-cdn.net/img/Photos/Slides/4.webp'
          alt='Place Royale Bruxelles'
        />
      </MDBMultiCarousel>
    </MDBLightbox> */}
  
    <Footer/>
    </div>
  );
}