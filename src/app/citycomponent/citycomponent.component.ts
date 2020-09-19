import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CityService } from './cityweather.service';

@Component({
  selector: 'app-citycomponent',
  templateUrl: './citycomponent.component.html',
  styleUrls: ['./citycomponent.component.css']
})
export class CitycomponentComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  public cityData: any = {};
  public forecasts: any[] = [];

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      
      this.cityService.getCityWeather(params.cityId).subscribe((city: any) => {
        this.cityData = city.city
        city.list.forEach(element => {
          this.forecasts.push(element);
        });
      });
    });

  }

}
