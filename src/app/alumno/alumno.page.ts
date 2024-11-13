import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {

  constructor(private alertController: AlertController) {}

  async confirmarAsistencia() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Asistencia registrada correctamente.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
