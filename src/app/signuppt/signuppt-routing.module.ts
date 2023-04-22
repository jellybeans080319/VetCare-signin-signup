import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupptPage } from './signuppt.page';

const routes: Routes = [
  {
    path: '',
    component: SignupptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupptPageRoutingModule {}
