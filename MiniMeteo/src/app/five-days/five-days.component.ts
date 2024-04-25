import { Component } from '@angular/core';
import { APICallsService} from '../apicalls.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-five-days',
  templateUrl: './five-days.component.html',
  styleUrls: ['./five-days.component.css']
})
export class FiveDaysComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;
  viewMode: 'card' | 'table' = 'card'; // Imposta la modalità predefinita a 'card'

  constructor(public call: APICallsService) { }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsCW = this.call.search5D(this.query);
    this.obsCW.subscribe((data) => this.results = data); 
    
  }
  toggleView() {
    this.viewMode = this.viewMode === 'card' ? 'table' : 'card'; // Alterna tra 'card' e 'table'
  }
}