import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 0;
  round = 1;
  set = 0;
  title = 'Tabata';

  timer = setInterval(() => {
    this.counter = this.counter + 1;
    this.title = 'HORA DE TREINAR: ' + this.counter;

    if (this.counter <= 19 && this.set == 0) {
    } else if (this.counter >= 19 && this.set == 0) {
      this.set = 1;
      this.counter = 0;
    } else if (this.counter <= 9 && this.set == 1) {
      this.title = 'DESCANSAR: ' + this.counter;
    } else if (this.round <= 7) {
      this.set = 0;
      this.counter = 0;
      this.round++;
    } else if (this.round <= 8) {
      this.title = 'VOCÊ VENCEU GUERREIRO(A)!';
    }
  }, 200);
}
