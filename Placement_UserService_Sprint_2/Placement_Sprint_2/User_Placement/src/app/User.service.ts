import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = "http://localhost:8065/userdetails";

  constructor(private http: HttpClient) {}

  // ✅ Create (POST)
  registerPlacement(userData: any): Observable<any> {
    console.log('Sending data to API:', userData);
    return this.http.post(this.API, userData);
  }

  // ✅ Read all (GET)
  getPlacements(): Observable<any> {
    return this.http.get(this.API);
  }

  // ✅ Read one (GET by ID)
  getPlacementById(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`);
  }

  // ✅ Update (PUT)
  updatePlacement(user: any): Observable<any> {
    return this.http.put(`${this.API}/${user.id}`, user);
  }

  // ✅ Delete (DELETE)
  deletePlacement(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
