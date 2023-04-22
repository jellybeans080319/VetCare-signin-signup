import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loginpt',
    pathMatch: 'full'
  },
  {
    path: 'loginpt',
    loadChildren: () => import('./loginpt/loginpt.module').then( m => m.LoginptPageModule)
  },
  {
    path: 'signuppt',
    loadChildren: () => import('./signuppt/signuppt.module').then( m => m.SignupptPageModule)
  },  {
    path: 'signupvet',
    loadChildren: () => import('./signupvet/signupvet.module').then( m => m.SignupvetPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
