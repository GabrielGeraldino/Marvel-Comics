import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG_TOKEN, ApplicationConfig } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('Accept', 'application/json');

  constructor(
    public httpClient: HttpClient,
    @Inject(APP_CONFIG_TOKEN) private config: ApplicationConfig
  ) {
    this.apiUrl = config.apiUrl;
  }

  get(endpoint: string, filter?: any) {
    return this.httpClient.get(this.apiUrl + endpoint, { params: filter as any });
  }

  post(endpoint: string, body: any) {
    return this.httpClient.post(this.apiUrl + endpoint, body, { headers: this.headers, responseType: 'json' });
  }

  put(endpoint: string, body: any) {
    return this.httpClient.put(this.apiUrl + endpoint, body);
  }

  delete(endpoint: string) {
    return this.httpClient.delete(this.apiUrl + endpoint);
  }

  patch(endpoint: string, body: any) {
    return this.httpClient.put(this.apiUrl + endpoint, body);
  }
}
