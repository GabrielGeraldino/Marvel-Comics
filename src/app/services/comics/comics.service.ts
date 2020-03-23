import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { FilterModel } from 'src/app/models/caracters.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  apiKey = 'a9189777893b9655b890ffa385c4dcdc';
  hash = 'cf931636082691cb213477dcc58ece39';
  timeStamp = '1584897426008';

  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient
  ) { }

  async getAllComics(filter?: FilterModel, stringSearch?: string) {
    return new Promise((resolve, reject) => {
      if (!stringSearch) {
        this.apiService.get(`comics?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.hash}`, filter)
          .subscribe((result: any) => resolve(result),
            (error) => reject(error));
      } else {
        this.apiService.get(`comics?titleStartsWith=${stringSearch}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.hash}`, filter)
          .subscribe((result: any) => resolve(result),
            (error) => reject(error));
      }

    });
  }

  async getComicId(id: string) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`comics/${id}?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.hash}`)
        .subscribe((result: any) => resolve(result),
          (error) => reject(error));
    });
  }

  async getComicUrl(url: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${url}?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.hash}`)
        .subscribe((result: any) => resolve(result),
          (error) => reject(error));
    });
  }
}
