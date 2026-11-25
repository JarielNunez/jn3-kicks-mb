export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  tallas: number[];
}

export const PRODUCTOS: Producto[] = [
  { id: 1, nombre: 'Nike Vomero Premium', precio: 15890, imagen: 'assets/img/vomero.jpg', tallas: [8, 9, 10, 11] },
  { id: 2, nombre: 'Air Jordan 1 Mid', precio: 9500, imagen: 'assets/img/jordan1.jpg', tallas: [9, 10, 10.5] },
  { id: 3, nombre: 'Nike Dunk Low Panda', precio: 7800, imagen: 'assets/img/dunk.jpg', tallas: [8, 9.5, 11] },
];