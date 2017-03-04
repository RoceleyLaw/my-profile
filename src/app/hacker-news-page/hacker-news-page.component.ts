import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacker-news-page',
  templateUrl: './hacker-news-page.component.html',
  styleUrls: ['./hacker-news-page.component.css']
})
export class HackerNewsPageComponent implements OnInit {
  items: number[];

  constructor() {
   this.items = Array(30);
  }

  ngOnInit() {
  }

}
