import { Component } from '@angular/core';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuthenticationPracticeApp';

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
    firebase.analytics();
  }
}
