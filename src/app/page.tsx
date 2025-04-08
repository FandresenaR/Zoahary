import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Features from '@/components/Features'
import BaobabGallery from '@/components/BaobabGallery'
import Testimonials from '@/components/Testimonials'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Features />
      <BaobabGallery />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}