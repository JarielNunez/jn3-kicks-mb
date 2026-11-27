import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRefresher,
  IonRefresherContent,
  RefresherCustomEvent,
} from '@ionic/angular';
import { PRODUCTOS, Producto } from '../../data/productos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  imports: [
    IonRefresher,
    IonRefresherContent,
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
  ],
})
export class CatalogoPage {
  productos: Producto[] = PRODUCTOS;

  refrescar(event: RefresherCustomEvent) {
    setTimeout(() => {
      this.productos = [...this.productos].reverse();
      event.target.complete();
    }, 1500);
  }
}
