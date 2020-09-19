import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CitycomponentComponent } from './citycomponent/citycomponent.component';
import { FormCityComponent } from './form-city/form-city.component';
import { ListcityComponent } from './list-city/listcity.component';

const routes: Routes = [
    { path: '', component: ListcityComponent },
    { path: 'newCity', component: FormCityComponent },
    { path: 'city/:cityId', component: CitycomponentComponent },
    
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);