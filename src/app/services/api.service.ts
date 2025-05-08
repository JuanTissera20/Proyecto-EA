import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private baseUrl = '/api/personas/registrar';

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
   

  createUser(userData: any): Observable<any> {  // 🔹 Aquí //  debe estar la función
    console.log('Enviando datos al backend...', userData);
    const headers = {
      headers: { 'Content-Type': 'application/json' }
    }
    return this.http.post('http://localhost:8080/personas/registrar', userData, headers);
  }

}