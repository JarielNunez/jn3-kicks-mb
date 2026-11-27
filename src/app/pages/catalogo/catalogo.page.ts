import { Component, inject, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router} from '@angular/router';
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
  RefresherCustomEvent, IonFab, IonFabButton, IonIcon, IonFabList, GestureController, ActionSheetController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, calendar, logoWhatsapp, eye } from 'ionicons/icons';
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
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
  ],
  
})

export class CatalogoPage implements AfterViewInit {
  productos: Producto[] = PRODUCTOS;
  @ViewChildren('tarjeta', { read: ElementRef }) tarjetas!: QueryList<ElementRef<HTMLElement>>;
  private router = inject(Router);
  private gestureCtrl = inject(GestureController);
  private actionSheetCtrl = inject(ActionSheetController);
  private fuePresionLarga = false;
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    addIcons({ add, calendar, logoWhatsapp, eye });
  }

  ngAfterViewInit() {
    this.tarjetas.forEach((tarjeta) => {
      const el = tarjeta.nativeElement;
      const gesto = this.gestureCtrl.create({
        el,
        gestureName: 'long-press',
        threshold: 0,
        onStart: () => {
          this.fuePresionLarga = false;
          this.timer = setTimeout(() => {
            this.fuePresionLarga = true;
            this.mostrarMenu(Number(el.dataset['id']));
          }, 600);
        },
        onMove: (ev) => {
          if (Math.abs(ev.deltaX) > 10 || Math.abs(ev.deltaY) > 10) {
            clearTimeout(this.timer);
          }
        },
        onEnd: () => clearTimeout(this.timer),
      });
      gesto.enable();
    });
  }

  async mostrarMenu(id: number) {
    const p = this.productos.find((x) => x.id === id);
    if (!p) return;

    const menu = await this.actionSheetCtrl.create({
      header: p.nombre,
      buttons: [
        { text: 'Ver detalle', icon: 'eye', handler: () => { this.router.navigate(['/detalle', p.id]); } },
        { text: 'Reservar con 20%', icon: 'calendar', handler: () => { this.router.navigate(['/detalle', p.id]); } },
        {
          text: 'Consultar por WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            window.open(`https://wa.me/18494100219?text=${encodeURIComponent('Hola, me interesa el ' + p.nombre)}`, '_blank');
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    await menu.present();
  }

  abrir(p: Producto) {
    if (this.fuePresionLarga) return;
    this.router.navigate(['/detalle', p.id]);
  }

  refrescar(event: RefresherCustomEvent) {
    setTimeout(() => {
      this.productos = [...this.productos].reverse();
      event.target.complete();
    }, 1500);
  }
} 