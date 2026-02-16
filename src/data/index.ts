import { Feature, ImageData, PricingOption } from '../types';

export const features: Feature[] = [
  {
    icon: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
    title: 'Safe & Secure',
    description: 'Located in a peaceful, family-friendly holiday park with 24/7 security'
  },
  {
    icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    title: '6 Berth Caravan',
    description: 'Palm Grove - Spacious accommodation for up to 6 guests'
  },
  {
    icon: 'M7 18h10V6H7v12zm5.5-10h1v3H16v1h-2.5v3h-1v-3H10v-1h2.5V8zM21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z',
    title: 'Smart TV & WiFi',
    description: 'Smart TV in all rooms plus free WiFi throughout'
  },
  {
    icon: 'M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z',
    title: 'Wrap Around Veranda',
    description: 'Private outdoor space with comfortable seating area'
  },
  {
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    title: 'All Amenities Included',
    description: 'Central heating, bedding made up, private parking, cotbed, bed guards, highchair and pushchair available on request'
  },
  {
    icon: 'M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98v9.47z',
    title: 'Book with Ease',
    description: 'Simple booking process - Bookings open'
  }
];

export const exteriorImages: ImageData[] = [
  { 
    src: './data/images/frontalview.jpg', 
    alt: 'Frontal View' 
  },
  { 
    src: './data/images/sideview.jpg', 
    alt: 'Side View' 
  },
  { 
    src: './data/images/607687752_3336085886568196_1730067545753158373_n.jpg', 
    alt: 'External Features' 
  },
  { 
    src: './data/images/patio.jpg', 
    alt: 'Private Patio' 
  },
  { 
    src: './data/images/patio2.jpg', 
    alt: 'Patio with Seating' 
  }
];

export const interiorImages: ImageData[] = [
  { 
    src: './data/images/605223774_3336085483234903_9022047593420434258_n.jpg', 
    alt: 'Interior View' 
  },
  { 
    src: './data/images/607295468_3336085309901587_7821637476024097109_n.jpg', 
    alt: 'Living Area' 
  },
  { 
    src: './data/images/livingspace.jpg', 
    alt: 'Living Space' 
  },
  { 
    src: './data/images/living_space.jpg', 
    alt: 'Living Room' 
  },
  { 
    src: './data/images/living_space2.jpg', 
    alt: 'Spacious Living' 
  },
  { 
    src: './data/images/kitchen.jpg', 
    alt: 'Modern Kitchen' 
  },
  { 
    src: './data/images/dining.jpg', 
    alt: 'Dining Area' 
  },
  { 
    src: './data/images/masterbed.jpg', 
    alt: 'Master Bedroom' 
  },
  { 
    src: './data/images/bedroom.jpg', 
    alt: 'Bedroom' 
  },
  { 
    src: './data/images/shower.jpg', 
    alt: 'Shower Room' 
  },
  { 
    src: './data/images/hallway.jpg', 
    alt: 'Hallway' 
  },
  { 
    src: './data/images/asasas.jpg', 
    alt: 'Interior Detail' 
  }
];

export const pricingOptions: PricingOption[] = [
  {
    title: 'Weekend Break',
    price: '£225',
    duration: 'Friday - Monday',
    features: [
      'Perfect for quick getaway',
      '3 nights included',
      'Full access to facilities',
      'Flexible check-in times'
    ]
  },
  {
    title: 'Midweek Stay',
    price: '£300',
    duration: 'Monday - Friday',
    features: [
      'Peaceful weekday retreat',
      '4 nights included',
      'Great value for longer stays',
      'Quieter park atmosphere'
    ]
  },
  {
    title: 'Full Week',
    price: '£500',
    duration: 'Saturday - Saturday',
    features: [
      'Complete weekly experience',
      '7 nights included',
      'Best value option',
      'Ideal for families'
    ],
    excludes: 'Excludes Summer Holidays'
  },
  {
    title: 'Summer Holiday',
    price: '£600',
    duration: '18th July - 29th August',
    features: [
      'Premium summer season',
      'Saturday to Saturday only',
      '7 nights included',
      'Peak holiday experience'
    ],
    isSummer: true
  }
];
