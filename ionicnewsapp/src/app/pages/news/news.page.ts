import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: false,
})
export class NewsPage implements OnInit {
  usuario: string = 'Visitante';

  manchete: { titulo: string; imagem: string; link: string } | null = null;
  noticias: Array<{ titulo: string; imagem: string; link: string }> = [];

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.carregarUsuario();
    this.loadNews();
  }

  carregarUsuario(): void {
    const usuarioArmazenado = localStorage.getItem('usuarioNome'); 
    if (!usuarioArmazenado) {
      this.router.navigateByUrl('/login');
    } else {
      this.usuario = usuarioArmazenado;
    }
  }

  loadNews(): void {
    this.newsService.getAppleNews().subscribe({
      next: (data) => {
        const artigos = data.articles.map(article => ({
          titulo: article.title,
          imagem: article.urlToImage ?? '',
          link: article.url,
        }));

        if (artigos.length > 0) {
          this.manchete = artigos[0];
          this.noticias = artigos.slice(1);
        } else {
          this.manchete = null;
          this.noticias = [];
        }
      },
      error: (err) => {
        console.error('Erro ao carregar notícias:', err);
        this.manchete = null;
        this.noticias = [];
      },
    });
  }

  abrirLink(url: string): void {
    window.open(url, '_blank');
  }

  logout(): void {
    localStorage.removeItem('usuarioNome'); 
    localStorage.removeItem('usuarioEmail'); 
    this.router.navigateByUrl('/login');
  }
}
