import { Component, inject } from '@angular/core';
import { CountryApiService } from '../../services/apiCountry.service';
import { CountryInterface } from '../../interfaces/CountryApiInterface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  private readonly apiService: CountryApiService = inject(CountryApiService)
  
  public countryList: CountryInterface[] = [];
  public isLoading: boolean = false;

  searchByRegion(value: string): void{
    this.isLoading = true;
    this.apiService.searchRegion(value).subscribe( country => {
      this.countryList=country
      this.isLoading = false
    })
  }

}
