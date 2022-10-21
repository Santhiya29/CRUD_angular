import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.isSubmitted = false;

  }

  name = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]);

  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")

  ])

  gender = new FormControl('Male', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
  ])

  number = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{10}$')
  ])
  userForm: FormGroup = this.fb.group({
    email: this.email,
    name: this.name,
    dateOfBirth: '',
    gender: this.gender,
    password: this.password,
    number: this.number
  })

  ngOnInit(): void {
    //localStorage.clear()
    let date = new Date("Fri Jun 22 2018 14:37:47 GMT+0530 (India Standard Time)");

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    
    console.log(dd + "/" + mm + "/" + yyyy);
  }
  setValue() {
    console.log(this.userForm.get('gender')?.value)
  }

  onSubmit(userForm: FormGroup) {
    let name: string = userForm.get('name')?.value;;
    let email: string = userForm.get('email')?.value;;
    let password: string = userForm.get('password')?.value;;
    let dob: string = userForm.get('dateOfBirth')?.value;
    let x = dob.toString().split(' ');
    let y = x[1] + ' ' + x[2] + ' ' + x[3];
    let gender: string = userForm.get('gender')?.value;
    let number: string = userForm.get('number')?.value;
    let userId = this.randomString();
    let user: IUser = {
      id: userId,
      name: name,
      email: email,
      password: password,
      dob: y,
      gender: gender,
      number: number
    }
    localStorage.setItem(userId, JSON.stringify(user));
    this.isSubmitted = true;

    console.log(dob);
    console.log(x);

  }

  randomString() {
    var length = 7;
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  back() {
    location.reload();
  }

}
