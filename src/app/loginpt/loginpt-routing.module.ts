import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginptPage } from './loginpt.page';

const routes: Routes = [
  {
    path: '',
    component: LoginptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginptPageRoutingModule {}
