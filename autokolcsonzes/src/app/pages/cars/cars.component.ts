import { Component } from '@angular/core';
import { CarsObject } from '../../shared/constants/constants';
import { Comment } from '../../shared/models/Comment';
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
  comments: Array<Comment> = []; //egyelőre ebben a tömbben tároljuk a kommenteket -> később erre adatbázis lesz ofc

  commentsForm = this.createForm({
    username: '',
    comment: '',
    date: new Date()
  })

  constructor(private fb: FormBuilder, private router: Router){
    //console.log("Ez a konstruktor");
  }

  createForm(model: Comment){
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }



  reload(){
    
  }

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
    } /*else{
      console.log("Sikertelen komment!");
    }*/

  }

}
