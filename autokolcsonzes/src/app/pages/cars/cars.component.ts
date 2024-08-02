import { Component } from '@angular/core';
import { CarsObject } from '../../shared/constants/constants';
import { Comment } from '../../shared/models/Comment';
import { PersonalData } from '../../shared/models/PersonalData';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})

export class CarsComponent {
  carsObject: Array<any> = CarsObject;

  chosenImage: any;

  //commentObject: Comment = {};
  //comments: Array<Comment> = []; //egyelőre ebben a tömbben tároljuk a kommenteket -> később erre adatbázis lesz ofc

  reservations: Array<PersonalData> = [];

  /*
  commentsForm = this.createForm({
    username: '',
    comment: '',
    date: new Date()
  })
  */

  reservationForm = this.createForm({
    name: '',
    email: '',
    address: '',
    phone: '',
    days: 0,
    price: 0,
    date: new Date()
  })

  constructor(private fb: FormBuilder, private router: Router){
    //console.log("Ez a konstruktor");
  }

  createForm(model: PersonalData){
    let formGroup = this.fb.group(model);
    formGroup.get('name')?.addValidators([Validators.required, Validators.minLength(2)]);
    formGroup.get('email')?.addValidators([Validators.required, Validators.email]);
    formGroup.get('address')?.addValidators([Validators.required]);
    formGroup.get('phone')?.addValidators([Validators.required]);
    formGroup.get('days')?.addValidators([Validators.required]);
    formGroup.get('price')?.addValidators([Validators.required]);
    return formGroup;
  }



  reload(){
    
  }

  /*
  addComment() {
    if (this.commentsForm.valid){
      if(this.commentsForm.get('username') && this.commentsForm.get('comment')){
        this.commentsForm.get('date')?.setValue(new Date());
        //SPREAD OPERÁTOR: {... }
        //this.comments.push({...this.commentObject});
  
        this.comments.push({...this.commentsForm.value as Comment});
        ///this.router.navigateByUrl('/cars');
        //console.log("Sikeres komment :)");
  
        //másik megoldás:
        //this.comments.push(Object.assign({}, this.commentObject));
      }
    } 

  } */
  

  
  addReservation() {
    if (this.reservationForm.valid){
      if(this.reservationForm.get('name') && this.reservationForm.get('email') && this.reservationForm.get('address') 
      && this.reservationForm.get('phone') && this.reservationForm.get('days') && this.reservationForm.get('price')){
        this.reservationForm.get('date')?.setValue(new Date());
        //this.reservationForm.get('price')?.setValue();
  
        this.reservations.push({...this.reservationForm.value as PersonalData});
        ///this.router.navigateByUrl('/cars');
        //console.log("Sikeres komment :)");
  
        //másik megoldás:
        //this.comments.push(Object.assign({}, this.commentObject));
      }
    }

  }


}
