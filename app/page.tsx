import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import PopularCourses from '@/components/home/PopularCourses'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <PopularCourses />
      </main>
      <Footer />
    </>
  )
}
