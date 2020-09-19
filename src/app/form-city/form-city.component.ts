import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../entities/City';
import { CityFormService } from './cityform.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'form-city',
  templateUrl: './form-city.component.html',
  styleUrls: ['./form-city.component.css'],
  providers: [MessageService], 
})
export class FormCityComponent implements OnInit {

  constructor(private cityFormService: CityFormService,
     private formBuilder: FormBuilder,
     private messageService: MessageService,
     private router: Router
) { }

  public formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.getFormGroup();
  }

  private getFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      nameCity: [{value: "", disabled: false}, Validators.compose([Validators.required])],
      countryCity: [{value: "", disabled: false}, Validators.compose([])]

    });
    return formGroup;
  }

  public cancelarRegister(){
    this.router.navigateByUrl('/');
  }

  public registerCity(){
    if (this.formGroup.valid){
      let city = new City();
      city.name = this.formGroup.controls['nameCity'].value;
      city.country = this.formGroup.controls['countryCity'].value;
      this.cityFormService.registerCity(city).subscribe((ret: any[]) => {
        this.router.navigateByUrl('/');
      });
    }else {
      this.messageService.add({
        severity: 'error',
        summary: 'City name is required',
    });
    }
  }
}
