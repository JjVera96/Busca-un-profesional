import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;
  cargando: any;
  
  constructor(
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
  ) { 
    this.login_form = this.formBuilder.group({
      cc: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginForm() {
    this.activarLoading();
    this.navCtrl.navigateRoot(['perfil']);
  }

  async activarLoading() {
    this.cargando = await this.loadingCtrl.create({
        message: 'Cargando',
        spinner: 'crescent',
        showBackdrop: true,
    });
}

}
