import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { CountryInterface } from '../interfaces/CountryApiInterface';

@Injectable({ providedIn: 'root' })
export class CountryApiService {
  private readonly http: HttpClient = inject(HttpClient);
  apiUrl: string = 'https://restcountries.com/v3.1';

  getCountriesRequest(url: string): Observable<CountryInterface[]> {
    return this.http
      .get<CountryInterface[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchCapital(search: string): Observable<CountryInterface[]> {
    const url = `${this.apiUrl}/capital/${search}`;
    return this.getCountriesRequest(url)
  }

  searchCountry(search: string): Observable<CountryInterface[]> {
    const url = `${this.apiUrl}/name/${search}`;
    return this.getCountriesRequest(url)
  }

  searchRegion(search: string): Observable<CountryInterface[]> {
    const url = `${this.apiUrl}/region/${search}`;
    return this.getCountriesRequest(url)
  }

  searchCountryByAlphaCode(param: string): Observable<CountryInterface | null> {
    const url = `${this.apiUrl}/alpha/${param}`;
    return this.http.get<CountryInterface[]>(url).pipe(
      map((country) => (country.length > 0 ? country[0] : null)),
      catchError((error) => of(null))
    );
  }
}
