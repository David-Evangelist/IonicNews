import { Component, OnInit } from '@angular/core';
import {
  NewsService,
  NewsApiResponse,
  Article,
} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: false,
})
export class NewsPage implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  noticias: Array<{ titulo: string; imagem: string; link: string }> = [];

  loadNews(): void {
    this.newsService.getAppleNews().subscribe({
      next: (data: NewsApiResponse) => {
        this.noticias = data.articles.map((article: Article) => ({
          titulo: article.title,
          imagem: article.urlToImage ?? '',
          link: article.url,
        }));
      },
      error: (err) => {
        console.error('Erro ao carregar notícias:', err);
      },
    });
  }

  abrirLink(url: string): void {
    window.open(url, '_blank');
  }
}
