import Hero from '../components/home/Hero'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import FeaturedTours from '../components/home/FeaturedTours'
import Testimonials from '../components/home/Testimonials'
import GalleryPreview from '../components/home/GalleryPreview'
import CallToAction from '../components/home/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <FeaturedTours />
      <Testimonials />
      <GalleryPreview />
      <CallToAction />
    </>
  )
}
