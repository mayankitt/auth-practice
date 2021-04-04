import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fs = firebase.default.firestore();

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  async submitCredentials() {
    let self = this;
    let userProfile = null;
    await this.fs.collection('profiles').get().then((profiles)=> {

      profiles.forEach(function(p) {
        console.log(p.data().email);
        if(p.data().email == self.loginForm.get('email').value) {
          userProfile = p.data();
        }
      });
    });
    console.log(userProfile);
    if((userProfile && userProfile.password as string) == (this.loginForm.get('password').value as string)){
      alert('loginSuccessful')
    }
    else {
      alert('loginfailed')
    }
  }
}
