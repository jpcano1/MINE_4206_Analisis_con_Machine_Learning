import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabelerService {

  constructor(private http: HttpClient) { }

  labelMessage(message, label) {
    let body = {
      "message": message,
      "label": label
    }
    return this.http.post("/api/labeler", body);
  }
}
