import { Component } from '@angular/core';
import { APICallsService } from '../apicalls.service';
import { Observable } from 'rxjs';

// Interfaccia per la struttura dell'oggetto AirData
interface AirData {
  list: {
    main: {
      aqi: number;
    };
  }[];
}


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})

export class CurrentWeatherComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;
  airPollutionData: any;
  airQualityIndex: number;
  airQualityLabel: string;

  constructor(public call: APICallsService) { 
    
  }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;

    this.call.searchCW(this.query).subscribe((data) => {
      this.results = data;

      const lat = this.results.coord.lat;
      const lon = this.results.coord.lon;

      this.call.searchAirPollution(lat, lon).subscribe((airData: AirData) => {
        if (airData.list && airData.list.length > 0) {
          this.airQualityIndex = airData.list[0].main.aqi;
          this.airQualityLabel = this.translateAQI(this.airQualityIndex);
        } else {
          // Gestisci il caso in cui non ci siano dati sull'inquinamento dell'aria disponibili
          this.airQualityLabel = 'Dati non disponibili';
        }
      });
    });
  }

  // Funzione per tradurre l'indice di qualità dell'aria in una stringa
  translateAQI(aqi: number): string {
    switch (aqi) {
      case 1:
        return 'Buona';
      case 2:
        return 'Discreta';
      case 3:
        return 'Moderata';
      case 4:
        return 'Scarsa';
      case 5:
        return 'Molto scarsa';
      default:
        return 'Non disponibile';
    }
  }
}
