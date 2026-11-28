import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonLabel, IonNote, IonChip, IonFab, IonFabButton, IonIcon,
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
  ],
})
export class DetallePage {
  @Input() id = '';
  tallaElegida?: number;

  constructor() {
    addIcons({ calendar });
  }

  get producto(): Producto | undefined {
    return PRODUCTOS.find((p) => p.id === Number(this.id));
  }
}