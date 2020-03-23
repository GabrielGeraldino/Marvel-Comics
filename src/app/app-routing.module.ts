import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'caracters',
    loadChildren: () => import('./pages/caracters/caracters.module').then( m => m.CaractersPageModule)
  },
  {
    path: 'caracter-details/:id',
    loadChildren: () => import('./pages/caracter-details/caracter-details.module').then( m => m.CaracterDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
