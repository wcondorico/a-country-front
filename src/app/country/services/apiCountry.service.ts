import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, of, tap } from "rxjs";
import { CountryInterface } from "../interfaces/CountryApiInterface";

@Injectable({providedIn: 'root'})
export class CountryApiService {
  private readonly http: HttpClient = inject(HttpClient)
  apiUrl: string = 'https://restcountries.com/v3.1'

  searchCapital(search: string): Observable<CountryInterface[]> {
    const url = `${this.apiUrl}/capital/${search}`
    return this.http.get<CountryInterface[]>(url)
    .pipe(
      catchError( error => {
        console.error(error);
        return of([])
      })      
    );
  }
  
  searchCountry(search: string): Observable<CountryInterface[]> {
    const url = `${this.apiUrl}/name/${search}`
    return this.http.get<CountryInterface[]>(url)
    .pipe(
      catchError( error => {
        console.error(error);
        return of([])
      })      
    );
  }

  searchRegion(search: string): Observable<CountryInterface[]> {
    const url = `${this.apiUrl}/region/${search}`
    return this.http.get<CountryInterface[]>(url)
    .pipe(
      catchError( error => {
        console.error(error);
        return of([])
      })      
    );
  }

  searchCountryByAlphaCode(param: string ): Observable<CountryInterface[]>{
    const url = `${this.apiUrl}/alpha/${param}`
    return this.http.get<CountryInterface[]>(url)
    .pipe(
      catchError( error => {
        console.error(error);
        return of([])
      })      
    );
  }

}