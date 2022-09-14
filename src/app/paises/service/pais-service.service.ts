import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FronteraResp } from '../interfaces/frontera.interface';
import { PaisResp } from '../interfaces/selector.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private url_base: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  get regiones(): string[] {
    return [...this._regiones];
  }

  getPaisesPorRegion( region: string): Observable<PaisResp[] | []> {
    if(!region) {
      return of([])
    }

    const url = `${this.url_base}/region/${region}?field=name,cca2,cca3,ccn3s`;
    return this.http.get<PaisResp[]>(url);
  }

  getFronteraDePais( codigo: string): Observable<FronteraResp[] | []> {
    // Por si algo no coincide
    if(!codigo){
      return of([])
    }
    const url =  `${this.url_base}/alpha?codes=${codigo}`;
    return this.http.get<FronteraResp[]>(url);
  }
}
