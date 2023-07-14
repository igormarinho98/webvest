import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Investment } from '../models/investment.model';
import { Observable } from 'rxjs';
 

const baseUrl = 'http://localhost:8080/api/invest'

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Investment[]> {
    return this.http.get<Investment[]>(baseUrl);
  }

  get(id: any) : Observable<Investment> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<Investment> {
    return this.http.post(baseUrl, data);
  }

 

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


  findById(id: any): Observable<Investment[]> {
    return this.http.get<Investment[]>(`${baseUrl}/${id}`);
    
  }
  




}
