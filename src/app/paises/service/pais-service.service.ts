import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisResp } from '../interfaces/selector-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private http: HttpClient) { }

  get regiones(): string[] {
    return [...this._regiones];
  }
}
