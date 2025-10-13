export interface Destination {
  id: string;
  name: string;
  country: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  activities: Activity[];
  amenities: string[];
  location: {
    pickupPoint: string;
    address: string;
  };
}

export interface Activity {
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}