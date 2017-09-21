import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  articles: any[];

  constructor() { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles():void{
    // this.articles= [{"title":"article1", "content":"gros contenu en latin -> lorem iplsum t'as vu héhé"}, {"title":"article 2", "content":"gros contenu en latin -> lorem iplsum t'as vu héhé"}];
  }

}
