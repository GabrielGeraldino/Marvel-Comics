import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracterDetailsPageRoutingModule } from './caracter-details-routing.module';

import { CaracterDetailsPage } from './caracter-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracterDetailsPageRoutingModule
  ],
  declarations: [CaracterDetailsPage]
})
export class CaracterDetailsPageModule {}
