export interface IRentalHouse {
  _id: string;
  title: string;
  location: {
    city: string;
    state: string;
    country: string;
    zipCode?: string;
    address?: string;
  };
  description: string;
  rentAmount: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  landlordId: string;
  availableFrom: Date;
  amenities?: string[];
  isAvailable: boolean;
}
