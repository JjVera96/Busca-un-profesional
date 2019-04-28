import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'TU PERFIL',
      url: '/perfil',
      icon: '/assets/icon/perfil.svg'
    },
    {
      title: 'BUSCA UN PROFESIONAL',
      url: '/filtrar-profesional',
      icon: '/assets/icon/buscar-profesional.svg'
    },
    {
      title: 'CAPACÍTATE',
      url: '/capacitate',
      icon: '/assets/icon/capacitate.svg'
    },
    {
      title: 'CONFIGURACIÓN',
      url: '/configuracion',
      icon: '/assets/icon/configuracion.svg'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
