import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent implements OnInit {

  constructor(private _api:NewsapiService) { }

  financasData: any[] = [];

  ngOnInit(): void {
    this._api.financasNews().subscribe(result =>{
      console.log(result);
      this.financasData = result.articles;
    })
  }

}
