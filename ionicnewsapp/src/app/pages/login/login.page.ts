import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage {
  email: string = '';
  senha: string = '';
  usuario: string = '';

  constructor(private router: Router) {}

  login() {
    
    if (this.usuario && this.email && this.senha) {
     
      localStorage.setItem('usuario', this.usuario);
    
      this.router.navigateByUrl('/news');
    } else {
      alert('Preencha todos os campos');
    }
  }
}
