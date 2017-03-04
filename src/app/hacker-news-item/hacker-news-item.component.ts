import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsApiService } from '../hacker-news-api.service';

@Component({
  selector: 'app-hacker-news-item',
  templateUrl: './hacker-news-item.component.html',
  providers:[],
  styleUrls: ['./hacker-news-item.component.css']
})
export class HackerNewsItemComponent implements OnInit {
  @Input() itemID: number;
  public item: any;

  constructor(private _hackerNewsAPIService: HackerNewsApiService) {
    }

  ngOnInit() {
    this._hackerNewsAPIService.fetchItem(this.itemID).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load item' + this.itemID));
    }

}
