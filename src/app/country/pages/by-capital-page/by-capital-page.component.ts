import { Component, inject } from '@angular/core';
import { CountryApiService } from '../../services/apiCountry.service';
import { CountryInterface } from '../../interfaces/CountryApiInterface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  private readonly apiService: CountryApiService = inject(CountryApiService)

  countryList: CountryInterface[] = []

  search(value: string): void{
    this.apiService.searchCapital(value).subscribe( capital => {
      this.countryList=capital 
    })
  }

}
