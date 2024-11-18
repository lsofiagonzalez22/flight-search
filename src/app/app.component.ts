import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SearchComponent, FlightResultsComponent, HttpClientModule]
})
export class AppComponent { }
