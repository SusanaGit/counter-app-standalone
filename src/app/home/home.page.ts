import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  public num: number;
  public MAX: number;
  public MIN: number;

  constructor() {
    this.num = 0;
    this.MAX = 9999;
    this.MIN = 0;
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
