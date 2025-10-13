import { Destination } from '../types/destination';

export const destinationsData: Destination[] = [
  {
    id: '1',
    name: 'Labuan Bajo',
    country: 'Indonesia',
    price: '5,000',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800',
    description: 'From crystal-clear waters to breathtaking cruises, Labuan Bajo is calling! Explore hidden islands, swim with manta rays, and create memories that last a lifetime.',
    activities: [
      {
        name: 'Phinisi Luxury Private Trip',
        description: 'Complimentary pick-up from Labuan Bajo Airport or surrounding hotels',
        image: 'https://images.unsplash.com/photo-1597242551922-6f63a4a04ef1?w=400',
        duration: '1 Day',
        price: '$350'
      },
      {
        name: 'Komodo Dragon Tour',
        description: 'Meet the legendary Komodo dragons in their natural habitat',
        image: 'https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?w=400',
        duration: '4 Hours',
        price: '$200'
      },
      {
        name: 'Padar Island Hiking',
        description: 'Witness the most iconic view in Labuan Bajo',
        image: 'https://images.unsplash.com/photo-1571805529673-0f56b922dd65?w=400',
        duration: '6 Hours',
        price: '$150'
      }
    ],
    amenities: [
      'Professional guide',
      'Hotel pickup',
      'Lunch included',
      'Safety equipment',
      'Photography service',
      'Insurance'
    ],
    location: {
      pickupPoint: 'Labuan Bajo Airport',
      address: 'Komodo, East Nusa Tenggara, Indonesia'
    }
  },
  {
    id: '2',
    name: 'Venice',
    country: 'Italia',
    price: '4,700',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
    description: 'Experience the romantic charm of Venice, with its winding canals, historic architecture, and timeless beauty. Explore the city of bridges and discover hidden gems around every corner.',
    activities: [
      {
        name: 'Gondola Ride',
        description: 'Traditional Venetian gondola ride through the canals',
        image: 'https://images.unsplash.com/photo-1563911892317-0e6b441a2561?w=400',
        duration: '45 Minutes',
        price: '$80'
      },
      {
        name: "St. Mark's Basilica Tour",
        description: "Guided tour of the iconic St. Mark's Basilica",
        image: 'https://images.unsplash.com/photo-1565769583756-61a3c9d45218?w=400',
        duration: '2 Hours',
        price: '$65'
      }
    ],
    amenities: [
      'Expert guide',
      'Skip-the-line access',
      'Audio guide',
      'Free map',
      'Wifi on board'
    ],
    location: {
      pickupPoint: 'Venice Marco Polo Airport',
      address: 'Venice, Metropolitan City of Venice, Italy'
    }
  }
];