import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  @Input() list = [];  
  constructor() { }

  ngOnInit(): void {
 
  }
}
