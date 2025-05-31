import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  email: string = '';
  senha: string = '';

  login() {
    console.log('Login com:', this.email, this.senha);
  }
}
