import { Component, OnInit } from '@angular/core';
import { CaractersService } from 'src/app/services/caracters/caracters.service';
import { Router } from '@angular/router';
import { ComicsService } from 'src/app/services/comics/comics.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-caracters',
  templateUrl: './caracters.page.html',
  styleUrls: ['./caracters.page.scss'],
})
export class CaractersPage implements OnInit {

  comics: any[];
  comicsMore: any[];

  stringSearch: string;

  filter = { limit: 20, offset: 0 };
  scroll: any = { modified: false, target: { disabled: false } };

  constructor(
    private comicService: ComicsService,
    private route: Router,
    private sharedService: SharedService
  ) { }

  ionViewWillEnter() {
    this.getComics();
  }

  ngOnInit() {
  }

  async getComics(event?: any) {
    if (event) {
      this.scroll = event;
      this.filter.offset++;
      this.scroll.target.disabled = false;
    }

    await this.comicService.getAllComics(this.filter, this.stringSearch)
      .then((comics: any) => {
        if (event) {
          comics.data.results.map((comic) => {
            comic.thumbnail.path = comic.thumbnail.path + '/portrait_medium.jpg';
            this.comics.push(comic);
          });
        } else {
          this.comics = comics.data.results;
          this.thumb();
        }
      });
    event ? event.target.complete() : null;
  }

  thumb() {
    this.comics.forEach(comic => {
      comic.thumbnail.path = comic.thumbnail.path + '/portrait_medium.jpg';
    });
  }

  detailsComic(comic: any) {
    this.route.navigateByUrl(`/caracter-details/${comic.id}`);
  }

}
