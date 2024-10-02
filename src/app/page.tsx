"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'


const Home = () => {
const router = useRouter();

const goToAbout = () => {
   router.push("/about")

}
const goToFooter = () => {
  router.push("/footer")

}
const goToNavbar = () => {
  router.push("/navbar")

}
const goToContact = () => {
  router.push("/contact")

}



  return (
     <>
  
  
    <h1 className='text-red-800'>Home page</h1> <br />
    <br />
    <Link href="/about"> go to about page</Link> <br />
    <Link href="/footer">go to footer page</Link> <br />
    <Link href="/navbar">go to navbar page</Link> <br />
    <Link href="/contact">go to contact page</Link> <br />


    <button className='bg-lime-700 rounded-lg py-1 px-2 text-stone-50 border-2 border-black m-2'  onClick={goToAbout}> About btn </button>
    <button className='bg-lime-700 rounded-lg py-1 px-2 text-stone-50 border-2 border-black m-2'  onClick={goToFooter}> footer btn </button>
    <button className='bg-lime-700 rounded-lg py-1 px-2 text-stone-50 border-2 border-black m-2' onClick={goToNavbar}> Navbar btn </button>
    <button className='bg-lime-700 rounded-lg py-1 px-2 text-stone-50 border-2 border-black m-2'  onClick={goToContact}> Contact btn </button>
 
 


    </>
  )
}

export default Home
