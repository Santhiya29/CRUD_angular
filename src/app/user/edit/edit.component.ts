import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/User';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  isSubmitted: boolean = false;
  isMale :boolean =false;
  isFemale :boolean =false;
  param: string = '';
  previousUserValue: IUser = {
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    number: '',
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.isSubmitted = false;
  }

  name = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")

  ])

  gender = new FormControl('', [Validators.required]);
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
    //this.userForm.valueChanges.subscribe(console.log)
    this.route.params.subscribe((params: Params) => this.param = params['id']);
    this.getUserDetails();
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
    let user: IUser = {
      id: this.param,
      name: name,
      email: email,
      password: password,
      dob: y,
      gender: gender,
      number: number
    }
    console.log(this.gender)
    localStorage.setItem(this.param, JSON.stringify(user));
    this.isSubmitted = true;

    console.log(user);

  }

  getUserDetails() {
    if (this.param) {
      const x = localStorage.getItem(this.param)!;
      const user: IUser = JSON.parse(x);
      this.previousUserValue = user;
      this.isMale = this.previousUserValue.gender == 'Male'
      this.isFemale = this.previousUserValue.gender == 'Female'
      console.log(this.previousUserValue.gender)
    }
  }

  back() {
    this.router.navigate(["users"]);
  }

}
