import type { Destination } from '../types'

// All IDs verified from Unsplash public photo library
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`

export const destinations: Destination[] = [
  {
    id: 'kathmandu',
    name: 'Kathmandu Valley',
    tagline: 'City of Temples',
    description:
      'A living museum of ancient art and architecture. The valley holds seven UNESCO World Heritage Sites within a few square kilometres — medieval durbar squares, sacred stupas, and bustling bazaars.',
    image: img('photo-1605000797499-95a51c5269ae'),
    region: 'Central Nepal',
    altitude: '1,400 m',
    bestSeason: 'Oct – Nov, Mar – Apr',
    duration: '3 – 5 days',
    highlights: [
      'Pashupatinath Temple',
      'Boudhanath Stupa',
      'Swayambhunath (Monkey Temple)',
      'Patan Durbar Square',
      'Thamel nightlife',
    ],
  },
  {
    id: 'pokhara',
    name: 'Pokhara',
    tagline: 'Gateway to the Annapurnas',
    description:
      "Nepal's adventure capital sits on the shores of serene Phewa Lake with unobstructed views of the Annapurna and Dhaulagiri ranges. From here you can paraglide, kayak, or set off on world-famous treks.",
    image: img('photo-1506905925346-21bda4d32df4'),
    region: 'Western Nepal',
    altitude: '822 m',
    bestSeason: 'Oct – Apr',
    duration: '2 – 4 days',
    highlights: [
      'Phewa Lake boat rides',
      'Paragliding from Sarangkot',
      'Davis Falls & Gupteswar Cave',
      'Sunrise from Peace Stupa',
      'Lakeside cafes & bars',
    ],
  },
  {
    id: 'everest',
    name: 'Everest Region',
    tagline: 'Top of the World',
    description:
      "The Khumbu Valley is home to the world's highest peak and the legendary Sherpa people. Whether you're trekking to Base Camp or flying into Lukla for the first time, the scale here is humbling.",
    image: img('photo-1551632811-561732d1e306'),
    region: 'Solukhumbu, Eastern Nepal',
    altitude: '5,364 m (Base Camp)',
    bestSeason: 'Mar – May, Sep – Nov',
    duration: '12 – 16 days',
    highlights: [
      'Everest Base Camp',
      'Namche Bazaar',
      'Tengboche Monastery',
      'Kala Patthar viewpoint',
      'Sherpa culture & cuisine',
    ],
  },
  {
    id: 'chitwan',
    name: 'Chitwan National Park',
    tagline: 'Wild Heart of Nepal',
    description:
      "A UNESCO World Heritage Site and one of Asia's best wildlife reserves. Jeep safaris and jungle walks bring you face-to-face with one-horned rhinos, Bengal tigers, gharials, and hundreds of bird species.",
    image: img('photo-1474511320723-9a56873867b5'),
    region: 'Terai Lowlands',
    altitude: '100 – 500 m',
    bestSeason: 'Oct – Mar',
    duration: '2 – 3 days',
    highlights: [
      'One-horned rhinoceros safaris',
      'Bengal tiger tracking',
      'Canoe rides on the Rapti River',
      'Tharu village cultural show',
      'Bird watching (over 650 species)',
    ],
  },
  {
    id: 'annapurna',
    name: 'Annapurna Sanctuary',
    tagline: 'An Amphitheatre of Giants',
    description:
      'The Annapurna Sanctuary sits in a glacial cirque surrounded by 7,000 m+ peaks. The classic circuit passes through lush subtropical forest, terraced farmland, and remote Gurung villages.',
    image: img('photo-1527842891421-42eec6e703ea'),
    region: 'Western Nepal',
    altitude: '4,130 m (ABC)',
    bestSeason: 'Mar – May, Oct – Nov',
    duration: '7 – 12 days',
    highlights: [
      'Annapurna Base Camp (4,130 m)',
      'Poon Hill sunrise panorama',
      'Gurung & Magar villages',
      'Thriving rhododendron forests',
      'Ghandruk & Ghorepani',
    ],
  },
  {
    id: 'lumbini',
    name: 'Lumbini',
    tagline: 'Birthplace of the Buddha',
    description:
      'The sacred garden where Siddhartha Gautama was born in 623 BC. A UNESCO World Heritage Site drawing pilgrims from across the globe, with monasteries built by Buddhist nations forming a peaceful international zone.',
    image: img('photo-1545450017-2d37a8d39b81'),
    region: 'Southern Terai',
    altitude: '150 m',
    bestSeason: 'Oct – Feb',
    duration: '1 – 2 days',
    highlights: [
      'Maya Devi Temple & Sacred Garden',
      'Ashoka Pillar (circa 249 BC)',
      'World Peace Flame',
      'International monastery zone',
      'Lumbini Museum',
    ],
  },
  {
    id: 'bhaktapur',
    name: 'Bhaktapur',
    tagline: 'City of Devotees',
    description:
      "The best-preserved medieval city in Nepal, Bhaktapur feels untouched by modern time. Its three durbar squares, fine woodcarvings, and the aroma of juju dhau (king curd) make it unmissable.",
    image: img('photo-1464822759023-fed622ff2c3b'),
    region: 'Kathmandu Valley',
    altitude: '1,401 m',
    bestSeason: 'Year-round',
    duration: '1 day',
    highlights: [
      '55-Window Palace',
      'Nyatapola Temple',
      'Taumadhi Square',
      'Traditional pottery & thangka art',
      'Juju Dhau (famous yogurt)',
    ],
  },
  {
    id: 'mustang',
    name: 'Upper Mustang',
    tagline: 'The Forbidden Kingdom',
    description:
      'One of the last intact Tibetan Buddhist kingdoms, Upper Mustang only opened to trekkers in 1992. Ancient caves, monasteries carved into cliff-faces, and wind-sculpted desert canyons.',
    image: img('photo-1508193638397-1c4234db14d8'),
    region: 'Northern Nepal',
    altitude: '3,800 m (Lo Manthang)',
    bestSeason: 'Apr – Oct',
    duration: '14 – 18 days',
    highlights: [
      'Lo Manthang walled city',
      'Ancient Tiji Festival (May)',
      'Chungsi Cave monastery',
      'Wind-sculpted canyon landscapes',
      'Authentic Tibetan Buddhist culture',
    ],
  },
]

export const getFeaturedDestinations = () =>
  destinations.filter(d =>
    ['kathmandu', 'pokhara', 'everest', 'chitwan', 'annapurna', 'mustang'].includes(d.id)
  )

export const getDestinationById = (id: string) =>
  destinations.find(d => d.id === id)
