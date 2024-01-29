import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class career {
  private apiUrl = 'https://itpanda.netlify.app/.netlify/functions/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  dropCv(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/drop', data);
  }
}