export interface HouseOptions {
  order: number;
  name: string;
  description: string;
  selectors: HouseOptionSelector[];
}

interface HouseOptionSelector {
  order: number;
  name: string;
  description: string;
  selection: 'single' | 'multiple';
  options: HouseOptionOptions[];
}

interface HouseOptionOptions {
  order: number;
  name: string;
  description: string;
  price: number;
}
