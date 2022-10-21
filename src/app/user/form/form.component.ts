import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
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

  ngOnInit(): void {}

  onSubmit(userForm: FormGroup) {
    let name: string = userForm.get('name')?.value;;
    let email: string = userForm.get('email')?.value;;
    let password: string = userForm.get('password')?.value;;
    let dob = userForm.get('dateOfBirth')?.value;
    let gender: string = userForm.get('gender')?.value;
    let number: string = userForm.get('number')?.value;
    let userId = this.generateId();

    let user: IUser = {
      id: userId,
      name: name,
      email: email,
      password: password,
      dob: dob,
      gender: gender,
      number: number
    }

    localStorage.setItem(userId, JSON.stringify(user));
    this.isSubmitted = true;
  }

  generateId() {
    let length = 7;
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  back() {
    location.reload();
  }

  navigate()
  {
    this.router.navigate(["/users"]);
  }

}
