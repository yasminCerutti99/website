import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.component.html',
  styleUrls: ['./ciencia.component.css']
})
export class CienciaComponent implements OnInit {

  constructor(private _api:NewsapiService) { }

  cienciaData: any[] = [];

  ngOnInit(): void {
    this._api.cienciaNews().subscribe(result =>{
      console.log(result);
      this.cienciaData = result.articles;
    })
  }
}
