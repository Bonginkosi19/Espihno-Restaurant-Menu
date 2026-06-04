import React from 'react';
import Hero from '../components/sections/Hero';
import TodaysSpecial from '../components/sections/TodaysSpecial';
import Specialties from '../components/sections/Specialties';
import Testimonials from '../components/sections/Testimonials';
import DiningEvents from '../components/sections/DiningEvents';

export default function Home() {
  return (
    <>
      <Hero />
      <TodaysSpecial />
      <Specialties />
      <Testimonials />
      <DiningEvents />
    </>
  );
}
