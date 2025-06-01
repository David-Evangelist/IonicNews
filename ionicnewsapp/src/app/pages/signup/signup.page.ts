import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false,
})
export class SignupPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  nome = '';
  email = '';
  senha = '';

  submit() {
    console.log('Cadastro enviado:', {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    });
    alert('Cadastro enviado! Confira o console.');
  }
}
