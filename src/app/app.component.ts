import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';
import { NewsapiService } from './service/newsapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _api:NewsapiService) { }

  homeData: any[] = [];

  ngOnInit(): void {
    this._api.homepageNews().subscribe(result =>{
      console.log(result);
      this.homeData = result.articles;
    })
  }
  
  title = 'website';
}

