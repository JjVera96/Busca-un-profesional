import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-capacitate',
  templateUrl: './capacitate.page.html',
  styleUrls: ['./capacitate.page.scss'],
})
export class CapacitatePage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  btnCurso(){
    console.log('Apreto cursos');
    this.iab.create("https://aprendergratis.es/cursos-online/como-sobre-como-construir-una-casa-de-forma-autosuficiente/","_blank");
  }
}
