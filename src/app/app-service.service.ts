import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private readonly url = "http://localhost:8080/welcome/";

  constructor(private http: HttpClient) { }

  getHello() {
    return this.http.get(this.url);
  }

  addOrEdit(publicHoliday: any) {
    return this.http.put(this.url, publicHoliday);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }

  deleteAllById(ids: number[]) {
    return this.http.post(this.url + "deleteAllById", ids);
  }
}
