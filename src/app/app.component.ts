import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('refVariable') regForm: NgForm;
  defaultQuestion = 'pet';
  regComments = '';
  genders =['male', 'female'];
  formDeatils: boolean = false;
  user = {
    userName: '',
    email: '',
    secretQusetion: '',
    comments: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.regForm.setValue({
    //   userData: {
    //     email: '',
    //   },
    //   
    //   secret: 'pet',
    //   comments: 'ajkd',
    //   gender: 'male',
    // });
    this.regForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  // onSubmit(myform: NgForm) {
  //   console.log(myform);
  // }

  onSubmit() {
    //console.log(this.regForm);
    this.formDeatils = true;
    this.user.userName = this.regForm.value.userData.username;
    this.user.email = this.regForm.value.userData.email;
    this.user.secretQusetion = this.regForm.value.secret;
    this.user.comments = this.regForm.value.comments
    this.user.gender = this.regForm.value.gender;
  }
}
