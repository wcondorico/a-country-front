import { Component, inject } from '@angular/core';
import { CountryInterface } from '../../interfaces/CountryApiInterface';
import { CountryApiService } from '../../services/apiCountry.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  private readonly apiService: CountryApiService = inject(CountryApiService)

  public countryList: CountryInterface[] = [];
  public isLoading: boolean = false;

  searchByCapital(value: string): void{
    this.isLoading = true;
    this.apiService.searchCapital(value)
    .subscribe( capital => {
      this.countryList=capital 
      this.isLoading = false;
    })
  }

}
