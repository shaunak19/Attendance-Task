import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isDash:string="";
  constructor() { }

  ngOnInit(): void {
  }

  change(x:string){
    if(x==="dashboard")
      this.isDash="dashboard";
    else if(x==="present") 
      this.isDash="present";
  }
}
