import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  subj = new BehaviorSubject(0);

  constructor() {
    this.subj.subscribe((data) => {
      console.log(data, '1 Observer');
    });

    // On passe une nouvelle valeur à SUBJ
    this.subj.next(1);

    // On peut avoir la derniere valeur stockée
    this.subj.subscribe((data) => {
      console.log(data, '2 Observer');
    });

    // On passe une nouvelle valeur à SUBJ
    this.subj.next(Math.random());
  }
}
