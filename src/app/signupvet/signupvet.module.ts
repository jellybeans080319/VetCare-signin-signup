import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupvetPageRoutingModule } from './signupvet-routing.module';

import { SignupvetPage } from './signupvet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignupvetPageRoutingModule
  ],
  declarations: [SignupvetPage]
})
export class SignupvetPageModule {}
