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
  dataSource: IUser[] = [];
  data: IUser[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    for (let i = 0; i < localStorage.length; i++) {
      let x = localStorage.getItem(localStorage.key(i)!);
      const value = localStorage.getItem(localStorage.key(i)!)

      if (typeof value === 'string') {
        const parse: IUser = JSON.parse(value)
        this.data.push(parse)

      }
    }
    this.dataSource = this.data;

    console.log(this.data);

  }
  edit(id: string) {
    this.router.navigate(["update_user", id]);
  }
  
  delete(id: string) {
  {
    console.log(id)
    localStorage.removeItem(id);
   // location.reload()
  }
}

}
