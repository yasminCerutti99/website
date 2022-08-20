import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-entretenimento',
  templateUrl: './entretenimento.component.html',
  styleUrls: ['./entretenimento.component.css']
})
export class EntretenimentoComponent implements OnInit {

  constructor(private _api:NewsapiService) { }

  entretenimentoData: any[] = [];

  ngOnInit(): void {
    this._api.entretenimentoNews().subscribe(result =>{
      console.log(result);
      this.entretenimentoData = result.articles;
    })
  }
}
