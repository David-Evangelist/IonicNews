import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
  standalone: false,
})
export class NewsDetailPage implements OnInit {
  noticia = {
    titulo: '',
    imagem: '',
    descricao: '',
    link: '',
    categoria: '',
    autor: '',
    dataPublicacao: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.noticia.titulo = params['titulo'] || '';
      this.noticia.imagem = params['imagem'] || '';
      this.noticia.descricao = params['descricao'] || '';
      this.noticia.link = params['link'] || '';
      this.noticia.categoria = params['categoria'] || '';
      this.noticia.autor = params['autor'] || 'Desconhecido';
      this.noticia.dataPublicacao = params['dataPublicacao'] || '';
    });
  }

  abrirLinkOriginal(): void {
    if (this.noticia.link) {
      window.open(this.noticia.link, '_blank');
    }
  }
}
