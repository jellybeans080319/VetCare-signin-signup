import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, setDoc, docData, doc, addDoc, deleteDoc, updateDoc, query, where} from '@angular/fire/firestore'
import { Auth, signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs'

export interface UserInfo{
  id?: string;
  name: string;
  age: string;
  gender: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) { }



//adding the user informations in the database
  addUserPatient(fullName: string, age: number, sex: string, email: string, patient: string, userID: string,){
    const userRef = collection(this.firestore, 'user')
    return addDoc(userRef, {
      name: fullName,
      age: age,
      sex: sex,
      email: email,
      uid: userID,
      type: patient="patient"
    })
  }

  addUserDoc(fullName: string, age: number, sex: string, email: string, doctor:string, userID: string,){
    const userRef = collection(this.firestore, 'user')
    return addDoc(userRef, {
      name: fullName,
      age: age,
      sex: sex,
      email: email,
      uid: userID,
      type: doctor="doctor"
    })
  }
//sa login, kunin yung username and password
  getUserInfo(uid: string): Observable<UserInfo[]>{
    console.log(uid)
    const userRef = query(
      collection(this.firestore, 'user'),
      where("uid", "==", uid)
    )
    return collectionData(userRef, {idField: 'id'}) as Observable<UserInfo[]>
  }

  updateProfile(docID: string, name: string, age: string, sex: string, email:string){
    const profileRef = doc(this.firestore, `user/${docID}`)
    return updateDoc(profileRef, {
      name: name,
      age: age,
      sex: sex,
      email: email
    })
  }

  logout() {
    return signOut(this.auth);
  }
}
