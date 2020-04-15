import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthyLifeFrontEnd';
  loggedIn = false;

  showFeature($event: boolean) {
    // this.loggedIn = $event;
    this.loggedIn = $event;
  }
}
