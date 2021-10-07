import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  userForm:FormGroup
  constructor(private userService:UserService,private router:Router) {
    this.userForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'attendance': new FormControl('', Validators.required),
      'present': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submitStudent(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userService.saveStudent(this.userForm.value).subscribe(() => {
        this.router.navigate([''])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }

}
