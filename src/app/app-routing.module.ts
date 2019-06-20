import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WrapWeatherInputComponent } from './wrap-weather-input/wrap-weather-input.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'forecast', component: ForecastComponent},
  {path: 'dashboard', component: WrapWeatherInputComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
