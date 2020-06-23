import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private readonly baseUrl: string = 'http://localhost:3000';

  constructor(private router: Router, private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}/vehicle`);
  }

  create(data: Object) {
    return this.http.post(`${this.baseUrl}/vehicle`, data);
  }

  getOne(id: string) {
    return this.http.get(`${this.baseUrl}/vehicle/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/vehicle/${id}`);
  }
}
