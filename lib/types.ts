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
  category: ServerCategory;
}

export interface Category {
  name: string;
}

export interface ServerCategory extends Category {
  id: string;
}
