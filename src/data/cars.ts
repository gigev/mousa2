
export type StockStatus = "In Stock" | "Coming Soon";
export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  stockStatus: StockStatus;
  images: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    pricePerDay: 520,
    stockStatus: "In Stock",
    images: "/cars/car-sclass.jpg",
    features: ["Premium leather", "Executive rear seats", "Burmester audio", "Panoramic roof"],
    slug: "1",
  },
  {
    id: "2",
    brand: "BMW",
    model: "7 Series",
    year: 2023,
    pricePerDay: 480,
    stockStatus: "In Stock",
    images: "/cars/car-7series.jpg",
    features: ["Massage seats", "Ambient lighting", "Bowers & Wilkins audio", "Driver assistance pro"],
    slug: "2",
  },
  {
    id: "3",
    brand: "Audi",
    model: "A8",
    year: 2022,
    pricePerDay: 440,
    stockStatus: "In Stock",
    images: "/cars/car-a8.jpg",
    features: ["Quattro AWD", "Valcona leather", "Matrix LED", "Four-zone climate"],
    slug: "3",
  },
  {
    id: "4",
    brand: "Lexus",
    model: "LS",
    year: 2023,
    pricePerDay: 420,
    stockStatus: "Coming Soon",
    images: "/cars/car-ls.jpg",
    features: ["Mark Levinson audio", "Quiet cabin", "Rear ottoman seats", "Advanced safety"],
    slug: "4",
  },
  {
    id: "5",
    brand: "Range Rover",
    model: "Vogue",
    year: 2024,
    pricePerDay: 560,
    stockStatus: "In Stock",
    images: "/cars/car-vogue.jpg",
    features: ["Terrain Response 2", "Executive class seating", "Meridian audio", "Air suspension"],
    slug: "5",
  },
  {
    id: "6",
    brand: "Porsche",
    model: "Cayenne",
    year: 2022,
    pricePerDay: 500,
    stockStatus: "In Stock",
    images: "/cars/car-cayenne.jpg",
    features: ["Sport Chrono", "Bose audio", "Adaptive air suspension", "Advanced infotainment"],
    slug: "6",
  },
];

export const getCarBySlug = (slug: string) => cars.find((c) => c.slug === slug);
export const getRelatedCars = (car: Car) => cars.filter((c) => c.id !== car.id && (c.brand === car.brand || Math.abs(c.pricePerDay - car.pricePerDay) <= 80)).slice(0, 3);

export const uniqueBrands = Array.from(new Set(cars.map((c) => c.brand))).sort();
export const years = Array.from(new Set(cars.map((c) => c.year))).sort((a, b) => b - a);
export const minPrice = Math.min(...cars.map((c) => c.pricePerDay));
export const maxPrice = Math.max(...cars.map((c) => c.pricePerDay));
