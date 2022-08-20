import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private _api:NewsapiService) { }

  homepageData: any[] = [];

  ngOnInit(): void {
    this._api.homepageNews().subscribe(result =>{
      console.log(result);
      this.homepageData = result.articles;
    })
  }

}
