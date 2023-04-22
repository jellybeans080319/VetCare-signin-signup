import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupptPageRoutingModule } from './signuppt-routing.module';

import { SignupptPage } from './signuppt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupptPageRoutingModule
  ],
  declarations: [SignupptPage]
})
export class SignupptPageModule {}
