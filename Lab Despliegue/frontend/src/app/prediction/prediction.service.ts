import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  getPrediction(message) {
    let body = {
      "message": message
    }

    return this.http.post("/api/prediction", body);
  }
}
