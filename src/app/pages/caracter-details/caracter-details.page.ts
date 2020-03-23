import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaractersService } from 'src/app/services/caracters/caracters.service';
import { ComicsService } from 'src/app/services/comics/comics.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-caracter-details',
  templateUrl: './caracter-details.page.html',
  styleUrls: ['./caracter-details.page.scss'],
})
export class CaracterDetailsPage implements OnInit {
  comicId: string;
  comic: any;
  creators: any;
  characters: any;

  detail;
  reader;
  purchase;

  constructor(
    private routerParams: ActivatedRoute,
    private comicService: ComicsService,
    private alertCtrl: AlertController
  ) { }


  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.comicId = (this.routerParams.snapshot.paramMap.get('id'));
    await this.getComic();
    this.getSubs();
  }

  getSubs() {
    this.comic.urls.forEach(url => {
      url.type === 'detail' ? this.detail = url.url : null;
      url.type === 'reader' ? this.reader = url.url : null;
      url.type === 'purchase' ? this.purchase = url.url : null;
    });
  }

  async getComic() {
    await this.comicService.getComicId(this.comicId)
      .then((result: any) => {
        this.comic = result.data.results[0];
        this.comic.thumbnail.path = this.comic.thumbnail.path + '/landscape_incredible.jpg';
      });
  }

  async buy() {
    const alert = await this.alertCtrl.create({
      header: 'Comprar',
      message: 'Voce será redirecionado para uma pagina web, deseja continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            window.open(this.purchase);
          }
        }
      ]
    });
    await alert.present();
  }

  async read() {
    const alert = await this.alertCtrl.create({
      header: 'Leia',
      message: 'Voce será redirecionado para uma pagina web, deseja continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            window.open(this.reader);
          }
        }
      ]
    });
    await alert.present();
  }

  async details() {
    const alert = await this.alertCtrl.create({
      header: 'Mais detalhes',
      message: 'Voce será redirecionado para uma pagina web, deseja continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            window.open(this.detail);
          }
        }
      ]
    });
    await alert.present();
  }

}
