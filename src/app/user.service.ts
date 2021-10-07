import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  studentData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveStudent(user:User){
    // this.userData.push(user)
    return this.http.post(`https://615e89ce3d1491001755a978.mockapi.io/users`,user)
  }

  getAllStudents(){
    return this.http.get<Array<User>>(`https://615e89ce3d1491001755a978.mockapi.io/users`)
  }

  getStudentByID(id:any){
    return this.http.get<User>(`https://615e89ce3d1491001755a978.mockapi.io/users/${id}`)
  }

  updateStudentById(userId:number,userdata:User){
    return this.http.put(`https://615e89ce3d1491001755a978.mockapi.io/users/${userId}`,userdata)
  }

  deleteStudentById(id:number){
    return this.http.delete(`https://615e89ce3d1491001755a978.mockapi.io/users/${id}`)
  }

}
