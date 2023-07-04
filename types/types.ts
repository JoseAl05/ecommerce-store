export type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

export type Product = {
  id: string;
  name:string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  category: Category;
  images: Image[];
};

export type Image = {
  id: string;
  url: string;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};

