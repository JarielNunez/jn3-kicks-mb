import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonList, IonItemSliding, IonItem, IonItemOptions, IonItemOption, IonLabel,
  IonThumbnail, IonIcon, IonRefresher, IonRefresherContent, RefresherCustomEvent,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { PRODUCTOS, Producto } from '../../data/productos';

interface Reserva {
  id: number;
  producto: Producto;
  talla: number;
}

const RESERVAS_INICIALES: Reserva[] = [
  { id: 1, producto: PRODUCTOS[0], talla: 9 },
  { id: 2, producto: PRODUCTOS[2], talla: 10 },
];

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
    IonList, IonItemSliding, IonItem, IonItemOptions, IonItemOption, IonLabel,
    IonThumbnail, IonIcon, IonRefresher, IonRefresherContent,
  ],
})
export class ReservasPage {
  reservas: Reserva[] = [...RESERVAS_INICIALES];

  constructor() {
    addIcons({ trash });
  }

  eliminar(id: number) {
    this.reservas = this.reservas.filter((r) => r.id !== id);
  }

  refrescar(event: RefresherCustomEvent) {
    setTimeout(() => {
      this.reservas = [...RESERVAS_INICIALES];
      event.target.complete();
    }, 1500);
  }
}
