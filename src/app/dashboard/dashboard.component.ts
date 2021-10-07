import { Component, OnInit } from '@angular/core';
import { User } from '../modal';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentList:Array<User> = []
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.changeData()
  }

  changeData(){
    this.userService.getAllStudents().subscribe((data) => {
      this.studentList = data
     })
  }

  deleteStudent(id:any){
    this.userService.deleteStudentById(id).subscribe((data) => {
      this.changeData()
    })
  }

}
