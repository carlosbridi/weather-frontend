import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CityService } from './cityweather.service';
import * as moment from 'moment';


@Component({
  selector: 'app-citycomponent',
  templateUrl: './citycomponent.component.html',
  styleUrls: ['./citycomponent.component.css']
})
export class CitycomponentComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  public cityData: any = {};

  public daysOfForecast: any[] = [];

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      
      this.cityService.getCityWeather(params.cityId).subscribe((city: any) => {
        this.cityData = city.city
        city.list.forEach(element => {
          element.date = moment(element.dt_txt).format('DD/MM/yyyy');

          if (this.daysOfForecast.some(item => item.date == element.date)){
            let dateElement = this.daysOfForecast.filter(item => item.date == element.date)[0];
            dateElement['weather'].push(element);

            if (element.dt_txt.includes("12:00:00")){
              dateElement['temp'] = element.main.temp;
              dateElement['description'] = element.weather[0].description
            }

            if (element.main.temp_max > dateElement['temp_max'])
              dateElement['temp_max'] = element.main.temp_max;
            if (element.main.temp_min < dateElement['temp_min'])
              dateElement['temp_min'] = element.main.temp_min;               
          } else {
            this.daysOfForecast.push({date: element.date, temp_max : 0, temp_min : 100, weather: [element]});
          }
        });
      });
    });
  }

}
