import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage  {
    public personagens: object[];
    
    constructor(private http: HttpClient) {
      this.http
        .get<object[]>('http://localhost:3000/posts')
        .subscribe(per => this.personagens = per)
    }
}