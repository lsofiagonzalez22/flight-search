import { Component } from '@angular/core';
import { FlightService } from '../flight.service';
import { FormsModule } from '@angular/forms';

import { FlightResultsComponent } from '../flight-results/flight-results.component';


@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  imports: [FormsModule, FlightResultsComponent]
})
export class SearchComponent {
  origin = '';
  destination = '';
  currency: string | undefined = undefined;  
  type = 'oneway';
  flights: any[] = [];
  error : string | null = null;

  constructor(private flightService: FlightService) { }

  searchFlights() {
    this.flightService.searchFlights(this.origin, this.destination, this.currency, this.type).subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.flights = data;
          this.error = null;
        } else {
          this.flights = [];
          this.error = 'No flights found for your search.';
        }
      },
      (err) => {
        this.flights = [];
        this.error = 'Error fetching flights. Please try again later.';
      }
    );
  }
}
