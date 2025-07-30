export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
}
