import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { CitycomponentComponent } from './citycomponent/citycomponent.component';
import { appRoutingModule } from './app-routing.module';
import { ListcityComponent } from './list-city/listcity.component';
import { CityService } from './citycomponent/cityweather.service';
import { CityforecastComponent } from './citycomponent/cityforecast/cityforecast.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCityComponent } from './form-city/form-city.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityFormService } from './form-city/cityform.service';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    CitycomponentComponent,
    ListcityComponent,
    CityforecastComponent,
    FormCityComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    CardModule,
    PanelModule,
    InputTextModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TabViewModule,
    appRoutingModule
  ],
  providers: [ AppService, CityService, CityFormService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
