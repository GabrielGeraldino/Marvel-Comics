import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { FilterModel } from 'src/app/models/caracters.model';

@Injectable({
  providedIn: 'root'
})
export class CaractersService {

  apiKey = 'a9189777893b9655b890ffa385c4dcdc';
  hash = 'cf931636082691cb213477dcc58ece39';
  timeStamp = '1584897426008';
  // a9189777893b9655b890ffa385c4dcdc public
  // 11b665bd3e38eb30f99688f403b20dec7b03a65b privada
  // 1584897426008 Time stamp
  // cf931636082691cb213477dcc58ece39 hash
  // timestamp + privada + publica


  constructor(public apiService: ApiService) { }

  async getAllCharacters(filter?: FilterModel) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`comics?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.hash}`, filter)
        .subscribe((result: any) => resolve(result),
          (error) => reject(error));
    });
  }

  async getCharacter(id: string) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`characters/${id}?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.timeStamp}`)
        .subscribe((result: any) => resolve(result),
          (error) => reject(error));
    });
  }

}



