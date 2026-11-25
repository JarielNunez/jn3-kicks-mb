import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  storefrontOutline, storefrontSharp,
  calendarOutline, calendarSharp,
  personOutline, personSharp,
  chatbubblesOutline, chatbubblesSharp,
  informationCircleOutline, informationCircleSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  protected readonly appPages = [
    { title: 'Catálogo', url: '/catalogo', icon: 'storefront' },
    { title: 'Mis reservas', url: '/reservas', icon: 'calendar' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Contacto', url: '/folder/Contacto', icon: 'chatbubbles' },
    { title: 'Sobre JN3 KICKS', url: '/folder/Nosotros', icon: 'information-circle' },
  ];

  constructor() {
    addIcons({
      storefrontOutline, storefrontSharp,
      calendarOutline, calendarSharp,
      personOutline, personSharp,
      chatbubblesOutline, chatbubblesSharp,
      informationCircleOutline, informationCircleSharp,
    });
  }
}