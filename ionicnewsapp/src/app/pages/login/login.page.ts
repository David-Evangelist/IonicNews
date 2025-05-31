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
 nome: string = '';
  constructor(private router: Router) {}

  login() {
    if (this.nome && this.email && this.senha) {
   
      localStorage.setItem('usuarioNome', this.nome);
      localStorage.setItem('usuarioEmail', this.email);

      this.router.navigateByUrl('/news');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}

