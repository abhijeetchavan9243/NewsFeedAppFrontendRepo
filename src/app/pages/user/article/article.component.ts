import { Component, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public article = {
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    
  };
  constructor() { }

  ngOnInit(): void {
  }

}
