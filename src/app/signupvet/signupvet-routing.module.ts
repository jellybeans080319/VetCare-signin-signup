import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupvetPage } from './signupvet.page';

const routes: Routes = [
  {
    path: '',
    component: SignupvetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupvetPageRoutingModule {}
