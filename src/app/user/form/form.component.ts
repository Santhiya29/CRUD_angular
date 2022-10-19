import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  value = 'Clear me';

  constructor(private fb: FormBuilder) { }

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
  }

  onSubmit(userForm: FormGroup) {
    //console.log(userForm)
    let dob = userForm.get('gender')?.invalid;
    console.log(dob)
    console.log(userForm.get('dateOfBirth'))

  }

}
