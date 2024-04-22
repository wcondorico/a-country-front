import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

@NgModule({
  declarations: [
    CountryPageComponent,
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule { }
