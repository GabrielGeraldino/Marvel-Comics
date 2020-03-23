import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaractersPageRoutingModule } from './caracters-routing.module';

import { CaractersPage } from './caracters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaractersPageRoutingModule
  ],
  declarations: [CaractersPage]
})
export class CaractersPageModule {}
