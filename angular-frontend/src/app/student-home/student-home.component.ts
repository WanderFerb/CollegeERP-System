import { Component, OnInit } from '@angular/core';
import { Students } from '../students';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  students: Students[];
 

  constructor() {
    this.students=[
      {
        name: "Abhinav",
        rollno:"8516104",
        branch: "Computer Science",
        dob: "20/01/1998"
      }
    ]
   }

  ngOnInit(): void {
  }

}
