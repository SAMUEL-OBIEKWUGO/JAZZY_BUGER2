import React from 'react'
import Hero_img from '../assets/Hero Section.svg'
import "../style/hero.css"

const Hero = () => {
  return (
    <>
    <main className="my-3">
      <img src={Hero_img} alt="hero_img" className='hero-img img_fluid w-100' />
    </main>
    </>
  )
}

export default Hero 