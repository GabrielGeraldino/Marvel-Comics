import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private toast = null;
  private isLoading = false;

  constructor(
    private toastCtrl: ToastController,
    public loadingController: LoadingController
  ) { }

  async showToast(message: string) {
    if (this.toast) {
      this.toast.dismiss();
      this.toast = null;
    }
    this.toast = await this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: 'bottom',
    });
    this.toast.present();
  }

  async showLoading(msg?: string, interval: number = 1500) {
    this.isLoading = true;
    return await this.loadingController.create({
      message: msg,
      duration: interval,
    }).then(load => {
      load.present().then(() => {
        if (!this.isLoading) {
          load.dismiss(null, undefined);
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss(null, undefined);
  }

}
