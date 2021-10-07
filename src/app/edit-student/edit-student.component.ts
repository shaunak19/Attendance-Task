import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id:number =0;
  userForm: FormGroup;


  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:UserService) { 
    this.userForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'attendance': new FormControl('', Validators.required),
      'present': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((Data) => {
      this.id = Data.id;
      this.userService.getStudentByID(Data.id).subscribe((d) => {
        console.log(d.attDate);
        delete d.id;
        this.userForm.patchValue(d);
      })
    })
  }

  submitStudent() {

    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      this.userService.updateStudentById(this.id,this.userForm.value).subscribe((data) => {
        this.router.navigate(['']);
      })
    }

  }

}
