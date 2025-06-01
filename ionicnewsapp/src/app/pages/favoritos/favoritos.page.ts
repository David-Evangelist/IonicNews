import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: false
})
export class FavoritosPage implements OnInit {
  usuario: string = '';
  favoritos: Array<{
    titulo: string;
    imagem: string;
    link: string;
    categoria: string;
    descricao?: string;
  }> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const usuarioArmazenado = localStorage.getItem('usuario');
    if (!usuarioArmazenado) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.usuario = usuarioArmazenado;
    this.carregarFavoritos();
  }

  carregarFavoritos(): void {
    const favoritosKey = `favoritos_${this.usuario}`;
    const dados = localStorage.getItem(favoritosKey);
    this.favoritos = dados ? JSON.parse(dados) : [];
  }

  removerFavorito(link: string): void {
    const favoritosKey = `favoritos_${this.usuario}`;
    this.favoritos = this.favoritos.filter(n => n.link !== link);
    localStorage.setItem(favoritosKey, JSON.stringify(this.favoritos));
  }

  abrirDetalhes(noticia: any): void {
    this.router.navigate(['/news-detail'], {
      queryParams: {
        titulo: noticia.titulo,
        imagem: noticia.imagem,
        link: noticia.link,
        categoria: noticia.categoria || '',
        descricao: noticia.descricao || '',
      }
    });
  }
}
