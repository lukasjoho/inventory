export interface Product {
  name: string;
  description?: string;
  visibility: boolean;
  price?: number;
  stock?: number;
  category?: Category;
}

export interface ServerProduct extends Product {
  id: string;
}

export interface Category {
  id: string;
  value: string;
  label: string;
}
