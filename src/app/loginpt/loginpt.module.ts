import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginptPageRoutingModule } from './loginpt-routing.module';

import { LoginptPage } from './loginpt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginptPageRoutingModule
  ],
  declarations: [LoginptPage]
})
export class LoginptPageModule {}
