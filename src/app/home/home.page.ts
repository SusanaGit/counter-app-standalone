import { Component } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonFooter,
  IonButton,
  IonIcon,
  IonCol,
  IonRow,
  IonGrid,
  IonText
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {caretUpCircleOutline, caretDownCircleOutline} from "ionicons/icons";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonContent, IonFooter, IonButton, IonIcon, IonCol, IonRow, IonGrid, IonText],

  providers: [AlertController]
})
export class HomePage {

  public num: number;
  public MAX: number;
  public MIN: number;

  constructor(private alertController: AlertController) {
    this.num = 0;
    this.MAX = 9999;
    this.MIN = 0;

    addIcons({caretUpCircleOutline, caretDownCircleOutline})
  }

  up() {
    if (this.num < this.MAX) {
      this.num++;
    }
  }

  down() {
    if (this.num > this.MIN) {
      this.num--;
    }
  }

  async reset() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Quieres resetear el contador?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.num=0;
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }
}
