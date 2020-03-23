import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaractersPage } from './caracters.page';

const routes: Routes = [
  {
    path: '',
    component: CaractersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaractersPageRoutingModule {}
