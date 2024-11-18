import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-results',
  standalone: true,
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css'],
  imports: [CommonModule]

})
export class FlightResultsComponent implements OnInit {

  
  @Input() flights: any[] = [];
  @Input() error: string | null = null;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    // this.searchFlights('MZL', 'BOG', 'USD', 'OneWay'); 
  }

  searchFlights(origin: string, destination: string, currency: string, type: string): void {
    this.flightService.searchFlights(origin, destination, currency, type).subscribe({
      next: (data) => {
        console.log(data, 'vuelos')
        this.flights = data; 
      },
      error: (err) => {
        this.error = err.error || 'Ocurrió un error al buscar los vuelos';
        console.error(err); 
      }
    });
  }
}
