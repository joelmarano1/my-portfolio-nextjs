import Aboutme from './components/Aboutme'
import Hero from './components/Hero'
import MyProject from './components/MyProject'
import TechStack from './components/TechStack'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden  justify-between px-8 py-4 md:px-16 md:py-8 lg:px-12 xl:px-24  2xl:px-48 3xl:px-56">
        <Hero/>
        <Aboutme/>
        <MyProject/>
        <TechStack/>

    </main>
  )
}
