import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(public router: Router, public _auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    })
  }

  registerPage() {
    this.router.navigate(['/register']);
  }

  loginUser() {
    const email = this.loginForm.get('email')?.value;
    const pwd = this.loginForm.get('password')?.value;

    this._auth.LoginUser(email, pwd)
  }

}
