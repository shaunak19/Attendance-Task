import { Component, OnInit } from '@angular/core';
import { User } from '../modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.css']
})
export class PresentListComponent implements OnInit {
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
