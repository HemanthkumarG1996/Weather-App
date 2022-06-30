import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
    constructor (private WeatherService:WeatherService){}
    cityName:string = "Bengaluru";
    weatherData?:WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData (cityName:string){
    this.WeatherService.getWeatherData(cityName).subscribe({
        next : (Response) =>{
            this.weatherData = Response;
            console.log(Response);
        }
    })
  }
}
