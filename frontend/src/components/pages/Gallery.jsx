import React from 'react';
import one from "../../assets/Gallery/1.jpg"
import two from "../../assets/Gallery/2.jpg"
import three from "../../assets/Gallery/3.jpg"
import four from "../../assets/Gallery/4.jpg"
import five from "../../assets/Gallery/5.jpg"
import six from "../../assets/Gallery/6.jpg"
import seven from "../../assets/Gallery/7.jpg"
import eight from "../../assets/Gallery/8.jpg"
import nine from "../../assets/Gallery/9.jpg"
import ten from "../../assets/Gallery/10.jpg"
import eleven from "../../assets/Gallery/11.jpg"
import twelve from "../../assets/Gallery/12.jpg"
import thirteen from "../../assets/Gallery/13.jpg"
import fourteen from "../../assets/Gallery/14.jpg"
import fifteen from "../../assets/Gallery/15.jpg"
import sixteen from "../../assets/Gallery/16.jpg"
import seventeen from "../../assets/Gallery/17.jpg"
import eighteen from "../../assets/Gallery/18.jpg"
import nineteen from "../../assets/Gallery/19.jpg"
import twenty from "../../assets/Gallery/20.jpg"




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
      <MDBRow lg={4} md={12} className='mb-4 mb-lg-0 '>
        <img
          src={one}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src={four}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBRow>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={three}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src={two}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={five}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src={six}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>

      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0 '>
        <img
          src={seven}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src={eight}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={nine}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src={ten}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>
      <MDBCol lg={4} className='mb-4 mb-lg-0'> <img
          src={thirteen}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
         <img
          src={fourteen}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
        </MDBCol>
      
     
      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={eleven}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src={twelve}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        /></MDBCol>
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
         <img
          src={fifteen}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
         <img
          src={sixteen}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        /></MDBCol>
         <MDBCol lg={4} className='mb-4 mb-lg-0'>
          <img
          src={seventeen}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
         <img
          src={eighteen}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
        </MDBCol>
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
         <img
          src={nineteen}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
         <img
          src={twenty}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        /></MDBCol>
        

      
    </MDBRow>
   


    <Footer/>
    </div>
  );
}