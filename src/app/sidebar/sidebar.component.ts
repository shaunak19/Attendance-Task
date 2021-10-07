import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isDash:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.isDash=!this.isDash;
  }
}
