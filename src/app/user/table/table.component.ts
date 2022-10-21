import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'password', 'dob', 'gender', 'number', 'edit', 'delete'];
  users: IUser[] = [];
  data: IUser[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

    for (let i = 0; i < localStorage.length; i++) {
      let value = localStorage.getItem(localStorage.key(i)!)

      if (typeof value === 'string') {
        const user: IUser = JSON.parse(value);
        user.dob = this.parseDOB(user?.dob)
        this.data.push(user)

      }
    }
    this.users = this.data;
  }

  edit(id: string) {
    this.router.navigate(["update_user", id]);
  }

  delete(id: string) {
    {
      localStorage.removeItem(id);
      location.reload()
    }
  }

  parseDOB(dob: any) {
    let date = new Date(dob);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    let dobValue: string = dd + '/' + mm + '/' + yyyy;
    return dobValue;
  }

  navigate()
  {
    this.router.navigate(["/"]);
  }

}
