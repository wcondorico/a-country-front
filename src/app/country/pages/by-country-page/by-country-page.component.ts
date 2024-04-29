import { Component, inject } from '@angular/core';
import { CountryApiService } from '../../services/apiCountry.service';
import { CountryInterface } from '../../interfaces/CountryApiInterface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  private readonly apiService: CountryApiService = inject(CountryApiService)
  
  public countryList: CountryInterface[] = [];
  public isLoading: boolean = false;

  searchByCountry(value: string): void{
    this.isLoading = true;
    this.apiService.searchCountry(value).subscribe( country => {
      this.countryList=country 
      this.isLoading = false;
    })
  }
  
}
