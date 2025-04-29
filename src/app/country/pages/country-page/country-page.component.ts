import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryApiService } from '../../services/apiCountry.service';
import { CountryInterface } from '../../interfaces/CountryApiInterface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly apiService: CountryApiService = inject(CountryApiService);
  private readonly router: Router = inject(Router);
  country!: CountryInterface;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.apiService.searchCountryByAlphaCode(id)))
      .subscribe({
        next: ( country ) => {
          !country? this.router.navigateByUrl(''): this.country = country  
        },
        error: () => {

        }
      })
  }
}
