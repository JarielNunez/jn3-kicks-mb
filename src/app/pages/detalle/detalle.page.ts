import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonLabel, IonNote, IonChip, IonFab, IonFabButton, IonIcon,
  IonButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { calendar } from 'ionicons/icons';
import { PRODUCTOS, Producto } from '../../data/productos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  imports: [
    CommonModule, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonList, IonItem, IonLabel, IonNote, IonChip, IonFab, IonFabButton, IonIcon, 
    IonButton
  ],
})
export class DetallePage {
  @Input() id = '';
  tallaElegida?: number;
  escala = 1;
  private distanciaInicial = 0;
  private escalaInicial = 1;

  constructor() {
    addIcons({ calendar });
  }

  get producto(): Producto | undefined {
    return PRODUCTOS.find((p) => p.id === Number(this.id));
  }

  private distancia(toques: TouchList): number {
    const dx = toques[0].clientX - toques[1].clientX;
    const dy = toques[0].clientY - toques[1].clientY;
    return Math.hypot(dx, dy);
  }

  inicioToque(ev: TouchEvent) {
    if (ev.touches.length === 2) {
      this.distanciaInicial = this.distancia(ev.touches);
      this.escalaInicial = this.escala;
    }
  }

  moverToque(ev: TouchEvent) {
    if (ev.touches.length === 2) {
      const nueva = this.escalaInicial * (this.distancia(ev.touches) / this.distanciaInicial);
      this.escala = Math.min(Math.max(nueva, 1), 4);
    }
  }

  reservarPorWhatsApp(p: Producto) {
    const mensaje = `Hola, quiero reservar el ${p.nombre} talla ${this.tallaElegida} pagando el 20% de depósito (RD$ ${p.precio * 0.2}).`;
    window.open(`https://wa.me/18494100219?text=${encodeURIComponent(mensaje)}`, '_blank');
  }
}