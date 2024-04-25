import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APICallsService {

  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }
  Token="1ddc3f9f51a32623b14d8e3addebf935"
  searchCW(query: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.Token}&units=metric&lang=it`;
    

    let currentW = this.http.get(url);
    return currentW;
  //Ritorno un observable ai componenti che richiedono il servizio
  }
  search5D(query: string) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${this.Token}&units=metric&lang=it`;

    let currentW = this.http.get(url);
    return currentW;
  //Ritorno un observable ai componenti che richiedono il servizio
  }
  searchAirPollution(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.Token}`;
    return this.http.get(url);
  }




}
