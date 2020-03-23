import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracterDetailsPage } from './caracter-details.page';

const routes: Routes = [
  {
    path: '',
    component: CaracterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracterDetailsPageRoutingModule {}
