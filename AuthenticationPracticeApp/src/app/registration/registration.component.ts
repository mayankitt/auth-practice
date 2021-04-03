import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  fs = firebase.default.firestore();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  submitProfile() {
    alert('Profile will be submitted.');
    this.fs.collection('profiles').add({
      fullName: this.registrationForm.get('fullName').value as string,
      email: this.registrationForm.get('email').value as string,
      password: this.registrationForm.get('password').value as string
    });
  }

}
