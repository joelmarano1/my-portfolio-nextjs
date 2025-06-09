"use client"
import { useEffect, useState } from 'react'
import Aboutme from './components/Aboutme'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MyProject from './components/MyProject'
import Navbar from './components/Navbar'
import TechStack from './components/TechStack'
import Loading from './components/Loading'
import Link from 'next/link'

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000); 
  }, []);
  return (



    <main className="bg-image dark:bg-blend-screen bg-slate-200 flex min-h-screen flex-col overflow-x-hidden  justify-between px-8 py-4 md:px-16 md:py-8 lg:px-12 xl:px-24  2xl:px-48 3xl:px-56">
        {!loading ? (
          <Loading/>
        ): (
          <div>
            <Navbar/>
            <Hero/>
            <Aboutme/>
            <MyProject/>
            <TechStack/>
            <Footer/>
          </div>
        ) } 
    </main>
  )
}
