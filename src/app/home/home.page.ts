import { Component } from '@angular/core';
import {IonHeader, IonContent, IonFooter, IonButton, IonIcon} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {caretUpCircleOutline, caretDownCircleOutline} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonContent, IonFooter, IonButton, IonIcon],
})
export class HomePage {

  public num: number;
  public MAX: number;
  public MIN: number;

  constructor() {
    this.num = 0;
    this.MAX = 9999;
    this.MIN = 0;

    addIcons({
      caretUpCircleOutline,
      caretDownCircleOutline
    })
  }

  up() {
    if (this.num < this.MAX) {
      this.num++;
    }
  }

  down() {
    if (this.num < this.MIN) {
      this.num--;
    }
  }
}
