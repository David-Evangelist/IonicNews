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

  categorias: string[] = ['Esportes', 'Tecnologia', 'Negócios', 'Entretenimento'];
  categoriasSelecionadas: string[] = [];

  manchete: { titulo: string; imagem: string; link: string } | null = null;
  noticias: Array<{ titulo: string; imagem: string; link: string; categoria: string; favorito?: boolean }> = [];
  noticiasFiltradas: Array<{
  titulo: string;
  imagem: string;
  link: string;
  categoria: string;
  favorito?: boolean;
}> = [];


  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.carregarUsuario();
    this.loadNews();
  }

  carregarUsuario(): void {
    const usuarioArmazenado = localStorage.getItem('usuario');
    if (!usuarioArmazenado) {
      this.router.navigateByUrl('/login'); // se não tiver usuário, volta para login
    } else {
      this.usuario = usuarioArmazenado;
    }
  }

 loadNews(): void {
  const favoritosKey = `favoritos_${this.usuario}`;
  const favoritosSalvos = JSON.parse(localStorage.getItem(favoritosKey) || '[]');

  this.newsService.getAppleNews().subscribe({
    next: (data) => {
      const artigos = data.articles.map(article => {
        const noticia = {
          titulo: article.title,
          imagem: article.urlToImage ?? '',
          link: article.url,
          categoria: this.identificarCategoria(article),
          favorito: false
        };

        // Se essa notícia está nos favoritos salvos, marca como favorita
        if (favoritosSalvos.some((fav: any) => fav.link === noticia.link)) {
          noticia.favorito = true;
        }

        return noticia;
      });

      if (this.categoriasSelecionadas.length > 0) {
        this.noticiasFiltradas = artigos.filter(a => this.categoriasSelecionadas.includes(a.categoria));
      } else {
        this.noticiasFiltradas = artigos;
      }

      if (this.noticiasFiltradas.length > 0) {
        this.manchete = this.noticiasFiltradas[0];
        this.noticias = this.noticiasFiltradas.slice(1);
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

  identificarCategoria(article: any): string {
  const texto = (article.title + ' ' + (article.description ?? '')).toLowerCase();

  if (texto.includes('sport') || texto.includes('game')) return 'Esportes';
  if (texto.includes('tech') || texto.includes('computer')) return 'Tecnologia';
  if (texto.includes('business') || texto.includes('market')) return 'Negócios';
  if (texto.includes('movie') || texto.includes('music')) return 'Entretenimento';
  return 'Outros';
}

  toggleCategoria(categoria: string) {
    const index = this.categoriasSelecionadas.indexOf(categoria);
    if (index >= 0) {
      this.categoriasSelecionadas.splice(index, 1);
    } else {
      this.categoriasSelecionadas.push(categoria);
    }
    this.loadNews();
  }


toggleFavorito(noticia: any): void {
  noticia.favorito = !noticia.favorito;

  const favoritosKey = `favoritos_${this.usuario}`;
  let favoritos = JSON.parse(localStorage.getItem(favoritosKey) || '[]');

  if (noticia.favorito) {
    const jaExiste = favoritos.some((n: any) => n.link === noticia.link);
    if (!jaExiste) {
      favoritos.push({
        titulo: noticia.titulo,
        imagem: noticia.imagem,
        link: noticia.link,
        categoria: noticia.categoria,
        descricao: noticia.descricao || ''
      });
    }
  } else {
    favoritos = favoritos.filter((n: any) => n.link !== noticia.link);
  }

  localStorage.setItem(favoritosKey, JSON.stringify(favoritos));
}


abrirDetalhes(noticia: { titulo: string; imagem: string; link: string; categoria?: string; descricao?: string }) {
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

abrirFavoritos() {
  this.router.navigateByUrl('/favoritos');
}
  logout(): void {
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');
  }
}
