import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseAuthService } from '../firebase-auth.service';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-loginpt',
  templateUrl: './loginpt.page.html',
  styleUrls: ['./loginpt.page.scss'],
})
export class LoginptPage implements OnInit {
  type: any;
  
  signInForm:FormGroup

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  constructor(
    private http: HttpClient,
    public angularFire: AngularFireAuth, 
    public router: Router,
    public authService: FirebaseAuthService,
    private toastController: ToastController,
     private dataService: DataService
  ) {

    this.signInForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
       ])),
       'password': new FormControl('', Validators.compose([
        Validators.required,
         Validators.minLength(6)
        ]))
      });
   }

   uid: any
   async signInWithEmail() {
    this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
    .then(user => {
      const uid = user.user?.uid!;
      
     

      this.dataService.getUserInfo(uid).subscribe(res => {
        this.type = res[0].type;
       
      if(this.type === 'patient'){
        console.log("you are a kemerut"); 
        // navigate to patient profile
        this.uid = user.user?.uid
        sessionStorage.setItem('user_id', this.uid)
        console.log('Logged In successful', user.user?.uid); 
        this.router.navigate(["/home"]); 
      }
      else{
        console.log("you are a doctor"); 
        // navigate to doc profile
        this.uid = user.user?.uid
        sessionStorage.setItem('user_id', this.uid)
        console.log('Logged In successful', user.user?.uid); 
        this.router.navigate(["/home"]); 
        }
      });
     console.log(this.type)
    })
    
    .catch((error: { code: string; }) => {
      if(error.code == "auth/user-not-found"){
        this.presentToast("User not found")
      }
      else if(error.code == "auth/wrong-password"){
        this.presentToast("Wrong password.")
      }  
    });
  }
    async presentToast(errorMessage: string) {
      const toast = await this.toastController.create({
         message: errorMessage,
         duration: 3000,
         cssClass: 'custom-toast',
         position: 'top',
         buttons: [
          {
            text: 'Dismiss',
            role: 'cancel'
          }
        ],
      });
      await toast.present();
    }
   
ngOnInit() {
}
}

