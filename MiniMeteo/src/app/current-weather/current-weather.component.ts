import { Component } from '@angular/core';
import { APICallsService} from '../apicalls.service';
import { Observable } from 'rxjs';
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
  
  constructor(public call: APICallsService) { }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsCW = this.call.searchCW(this.query);
    this.obsCW.subscribe((data) => this.results = data); 
    
  }
}