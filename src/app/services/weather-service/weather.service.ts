import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl =
    'http://api.weatherstack.com/current?access_key=2a506d2e46d387eea39270737e6b3d9d&query=37015';

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
