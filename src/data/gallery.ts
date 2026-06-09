import type { GalleryItem } from '../types'

const u = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`

// All IDs are verified Unsplash photos — wider + taller for max visual impact
export const galleryItems: GalleryItem[] = [
  // Mountains
  { id: 'g1',  src: u('photo-1551632811-561732d1e306', 1400, 1050), alt: 'Trekkers approaching Everest Base Camp',  category: 'mountains', location: 'Khumbu Valley, 5,364 m' },
  { id: 'g2',  src: u('photo-1506905925346-21bda4d32df4', 1400, 1050), alt: 'Himalayan dawn panorama from Poon Hill', category: 'mountains', location: 'Poon Hill, 3,210 m' },
  { id: 'g3',  src: u('photo-1527842891421-42eec6e703ea', 1400, 1050), alt: 'Annapurna massif above cloud line',       category: 'mountains', location: 'Annapurna Region' },
  { id: 'g4',  src: u('photo-1464822759023-fed622ff2c3b', 1400, 1050), alt: 'Snow-capped peak at golden hour',        category: 'mountains', location: 'Langtang Valley' },
  { id: 'g5',  src: u('photo-1488085061851-e6d1e3e00c4e', 1400, 1050), alt: 'Star trails over Himalayan camp',       category: 'mountains', location: 'Khumbu, 4,900 m' },
  { id: 'g6',  src: u('photo-1510784722466-f2aa240312c9', 1400, 1050), alt: 'Mountain range above morning mist',     category: 'mountains', location: 'Mustang Region' },

  // Culture
  { id: 'g7',  src: u('photo-1605000797499-95a51c5269ae', 1200, 900), alt: 'Boudhanath Stupa at dusk',              category: 'culture',   location: 'Kathmandu' },
  { id: 'g8',  src: u('photo-1570979103-5b8cd34ae84d', 1200, 900),  alt: 'Prayer flags on a mountain pass',        category: 'culture',   location: 'Thorong La, 5,416 m' },
  { id: 'g9',  src: u('photo-1545450017-2d37a8d39b81', 1200, 900),  alt: 'Ancient Buddhist monastery walls',       category: 'culture',   location: 'Lumbini' },
  { id: 'g10', src: u('photo-1508193638397-1c4234db14d8', 1200, 900), alt: 'Trekker crossing suspension bridge',   category: 'trekking',  location: 'Khumbu Valley' },

  // Wildlife
  { id: 'g11', src: u('photo-1474511320723-9a56873867b5', 1200, 900), alt: 'One-horned rhinoceros in tall grass',  category: 'wildlife',  location: 'Chitwan National Park' },
  { id: 'g12', src: u('photo-1437622368342-7a3d73a34c8f', 1200, 900), alt: 'Bengal tiger prowling riverbank',     category: 'wildlife',  location: 'Bardia National Park' },

  // Trekking
  { id: 'g13', src: u('photo-1486870591958-9b9d0d1dda99', 1400, 1050), alt: 'Solo hiker on high ridge trail',     category: 'trekking',  location: 'Annapurna Circuit' },
  { id: 'g14', src: u('photo-1500534314209-a25ddb2bd429', 1400, 1050), alt: 'Trail through rhododendron forest',  category: 'trekking',  location: 'Ghorepani Forest' },
  { id: 'g15', src: u('photo-1472214103451-9374bd1c798e', 1400, 1050), alt: 'Valley trail at sunrise',            category: 'trekking',  location: 'Langtang Valley' },
  { id: 'g16', src: u('photo-1426604966848-d7adac402bff', 1400, 1050), alt: 'Mountain lake reflection',           category: 'trekking',  location: 'Tilicho Lake, 4,919 m' },

  // People
  { id: 'g17', src: u('photo-1533587851505-d119e13fa0d7', 1200, 900), alt: 'Sherpa porter on the trail',          category: 'people',    location: 'Namche Bazaar' },
  { id: 'g18', src: u('photo-1544735716-392fe2489ffa', 1200, 900),  alt: 'Nepali farmer in terraced fields',     category: 'people',    location: 'Pokhara Valley' },
  { id: 'g19', src: u('photo-1454496522488-7a8e488e8606', 1400, 1050), alt: 'Mountain monastery at sunrise',     category: 'culture',   location: 'Upper Mustang' },
  { id: 'g20', src: u('photo-1447752875215-b2761acb3c5d', 1200, 900), alt: 'Dense forest on the lower trails',   category: 'trekking',  location: 'Chitwan Buffer Zone' },
  { id: 'g21', src: u('photo-1434394354979-a235cd36269d', 1400, 1050), alt: 'Himalayan sunset from base camp',   category: 'mountains', location: 'Everest Region' },
  { id: 'g22', src: u('photo-1488161628813-04466f872be2', 1200, 900), alt: 'Monk walking in monastery courtyard', category: 'culture',  location: 'Tengboche Monastery' },
]

export const getGalleryByCategory = (category: GalleryItem['category']) =>
  galleryItems.filter(item => item.category === category)
