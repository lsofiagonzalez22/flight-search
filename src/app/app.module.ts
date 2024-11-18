import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FlightResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
