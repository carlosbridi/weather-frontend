import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { City } from '../entities/City';

@Component({
  selector: 'app-listcity',
  templateUrl: './listcity.component.html',
  styleUrls: ['./listcity.component.css']
})
export class ListcityComponent {

  title = 'weather-frontapp';
  cities: City[];
  cols: any[];

  constructor( private appService: AppService,
    private router: Router
    ) {  }

    ngOnInit() {
        this.appService.getCities().subscribe((cities: City[]) => {
          console.log(cities);
          this.cities = cities;
        });

        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'country', header: 'Country' },
            { field: 'population', header: 'Population' },
        ];
    }

    addCity(){
      this.router.navigateByUrl('newCity');
    }
}