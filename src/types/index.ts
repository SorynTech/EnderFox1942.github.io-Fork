export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface PricingOption {
  title: string;
  price: string;
  duration: string;
  features: string[];
  excludes?: string;
  isSummer?: boolean;
}
