import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service/weather.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule],
  providers: [WeatherService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(
      (data) => {
        this.weatherData = data;
        console.log('Weather data:', this.weatherData);
      },
      (error) => {
        console.log('Error:', error);
      }, // error handling for service call failure)
    );
  }
}
