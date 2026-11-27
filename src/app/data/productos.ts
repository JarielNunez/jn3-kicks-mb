export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  tallas: number[];
}

export const PRODUCTOS: Producto[] = [
 { id: 1, nombre: 'Nike Free Metcon 7', precio: 8800, imagen: 'assets/img/metcon7.jpg', tallas: [8, 9, 10, 11] },
{ id: 2, nombre: "Nike Air Force 1 '07", precio: 8500, imagen: 'assets/img/af1.jpg', tallas: [9, 10, 10.5] },
{ id: 3, nombre: 'Nike Dunk Low Retro', precio: 8000, imagen: 'assets/img/dunk.jpg', tallas: [8, 9.5, 11] },
];