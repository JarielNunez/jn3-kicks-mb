import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full',
  },
  {
    path: 'folder/:folder',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalogo/catalogo.page').then((m) => m.CatalogoPage),
  },
  {
    path: 'detalle/:id',
    loadComponent: () => import('./pages/detalle/detalle.page').then((m) => m.DetallePage),
  },
  {
    path: 'reservas',
    loadComponent: () => import('./pages/reservas/reservas.page').then((m) => m.ReservasPage),
  },
];
