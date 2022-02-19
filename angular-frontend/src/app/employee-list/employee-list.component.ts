import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee' 
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();

    this.employees = [
      {
        "id" : 20011998,
        "firstName":"Abhinav",
        "lastName":"Dhiman",
       "emailId": "abhinav@gmail.com"
      },
      {
        "id" : 7081999,
        "firstName":"Vaibhav",
        "lastName":"Dhiman",
       "emailId": "vaibhav@gmail.com"
      }];
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = [...data,...this.employees];
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
