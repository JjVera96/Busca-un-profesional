import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-filtrar-profesional',
  templateUrl: './filtrar-profesional.page.html',
  styleUrls: ['./filtrar-profesional.page.scss'],
})
  export class FiltrarProfesionalPage implements OnInit {

  filtrar_form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
  ) {
    this.filtrar_form = this.formBuilder.group({
      tipo: ['', Validators.required],
      obra: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  filtrarForm(){
    this.navCtrl.navigateForward(['buscar-profesional']);
  }

}
