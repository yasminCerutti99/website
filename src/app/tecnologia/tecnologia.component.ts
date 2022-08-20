import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  constructor(private _api:NewsapiService) { }

  techData: any []= [];

  ngOnInit(): void {
    this._api.techNews().subscribe(result =>{
      console.log(result);
      this.techData = result.articles;
    });
  }

}
