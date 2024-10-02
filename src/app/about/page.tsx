
"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const About = () => {

  const router = useRouter();

  const goToHome = () => {
    router.push("/")
  }
  return (
    <>
    
    <h1 className='text-amber-800'>About page</h1> <br />
    <br />
    <Link href="/">go to Home page</Link> 
    <br />

    <button className='bg-lime-700 rounded-lg py-1 px-2 text-stone-50 border-2 border-black m-2'  onClick={goToHome}> Home btn </button>
    
    </>


  )
}

export default About