import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investor } from '../models/investor';

const baseUrl = 'http://localhost:8080/api/investor'



@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Investor[]> {
    return this.http.get<Investor[]>(baseUrl)
  }

  get(id: any) : Observable<Investor> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  
  create(data: any): Observable<Investor> {
    return this.http.post(baseUrl, data);
  } 

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findById(id: any): Observable<Investor[]> {
    return this.http.get<Investor[]>(`${baseUrl}/${id}`);
    
  }


}
