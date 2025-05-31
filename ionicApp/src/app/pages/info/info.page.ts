import { Component, OnInit } from '@angular/core';
import { NewsService, NewsApiResponse, Article } from '../../services/news.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  imports: [IonicModule],
  standalone: true
})
export class InfoPage implements OnInit {

  noticias: Array<{ titulo: string; imagem: string; link: string }> = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getAppleNews().subscribe({
      next: (data: NewsApiResponse) => {
        this.noticias = data.articles.map((article: Article) => ({
          titulo: article.title,
          imagem: article.urlToImage ?? '',
          link: article.url
        }));
      },
      error: (err) => {
        console.error('Erro ao carregar notícias:', err);
      }
    });
  }

  abrirLink(url: string): void {
    window.open(url, '_blank');
  }
}
