import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-esportes',
  templateUrl: './esportes.component.html',
  styleUrls: ['./esportes.component.css']
})
export class EsportesComponent implements OnInit {

  constructor(private _api:NewsapiService) { }

  esportesData: any[] = [];

  ngOnInit(): void {
    this._api.esportesNews().subscribe(result =>{
      console.log(result);
      this.esportesData = result.articles;
    })
  }
}
