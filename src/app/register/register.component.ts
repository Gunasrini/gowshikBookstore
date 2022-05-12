import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(public router: Router, public _auth: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    })
  }

  registerUser() {
    const email = this.registerForm.get('email')?.value;
    const pwd = this.registerForm.get('password')?.value;

    this._auth.RegisterUser(email, pwd)
  }

  goHome() {
    this.router.navigate(['']);
  }

}
