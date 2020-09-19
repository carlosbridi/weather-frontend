import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cityforecast',
  templateUrl: './cityforecast.component.html',
  styleUrls: ['./cityforecast.component.css']
})
export class CityforecastComponent implements OnInit {

  @Input()
  public cityForecastDay : any = {main: { temp: {}}};

  ngOnInit(): void {
    
  }
}
