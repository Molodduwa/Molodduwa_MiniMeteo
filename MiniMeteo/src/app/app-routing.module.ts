import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/CurrentWea', pathMatch: 'full' },
  { path: 'CurrentWea', component: CurrentWeatherComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
