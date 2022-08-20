import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.component.html',
  styleUrls: ['./saude.component.css']
})
export class SaudeComponent implements OnInit {

  constructor(private _api:NewsapiService) { }

  saudeData: any[] = [];

  ngOnInit(): void {
    this._api.saudeNews().subscribe(result =>{
      console.log(result);
      this.saudeData = result.articles;
    })
  }

}
