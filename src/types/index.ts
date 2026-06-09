export interface Destination {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  region: string
  altitude?: string
  bestSeason: string
  highlights: string[]
  duration?: string
}

export interface Tour {
  id: string
  title: string
  description: string
  image: string
  duration: string
  groupSize: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous'
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  highlights: string[]
  includes: string[]
  category: 'trekking' | 'cultural' | 'wildlife' | 'adventure' | 'spiritual'
  featured?: boolean
  popular?: boolean
}

export interface Testimonial {
  id: string
  name: string
  country: string
  countryFlag: string
  avatar: string
  rating: number
  text: string
  tour: string
  date: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: 'mountains' | 'culture' | 'wildlife' | 'trekking' | 'people'
  location: string
}

export type DifficultyLevel = Tour['difficulty']
export type TourCategory = Tour['category']
