import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  constructor(private _http:HttpClient) { }
  
  homepageNoticias = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=8e2eae986cce437da4b20d494af88df7';
  techNoticias = 'https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=8e2eae986cce437da4b20d494af88df7';
  cienciaNoticias = 'https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=8e2eae986cce437da4b20d494af88df7';
  entretenimentoNoticias = 'https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=8e2eae986cce437da4b20d494af88df7';
  esportesNoticias = 'https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=8e2eae986cce437da4b20d494af88df7';
  financasNoticias = 'https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=8e2eae986cce437da4b20d494af88df7';
  saudeNoticias = 'https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=8e2eae986cce437da4b20d494af88df7';

  getNews(): Observable<any>{
    const noticias = of(NewsapiService);
    return noticias;
  }

  homepageNews():Observable<any>{
    return this._http.get(this.homepageNoticias);
  }

  techNews():Observable<any>{
    return this._http.get(this.techNoticias);
  }

  cienciaNews():Observable<any>{
    return this._http.get(this.cienciaNoticias);
  }

  entretenimentoNews():Observable<any>{
    return this._http.get(this.entretenimentoNoticias);
  }

  esportesNews():Observable<any>{
    return this._http.get(this.esportesNoticias);
  }

  financasNews():Observable<any>{
    return this._http.get(this.financasNoticias);
  }

  saudeNews():Observable<any>{
    return this._http.get(this.saudeNoticias);
  }
}