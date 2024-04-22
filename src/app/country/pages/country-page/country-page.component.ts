import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryApiService } from '../../services/apiCountry.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit{
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  private readonly apiService: CountryApiService = inject(CountryApiService)
  

  ngOnInit(){
    this.activatedRoute.params.subscribe(({id}) => {
      this.apiService.searchCountryByAlphaCode(id).subscribe(country => console.log(country))
    })
  }

}
