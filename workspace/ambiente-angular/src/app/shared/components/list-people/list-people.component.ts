import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  count = 0;
  pessoas = []
  
  constructor(private service: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
    let interval = setInterval(()=> {
      this.count++;
      if(this.count === 10){
        clearInterval(interval)
      }
    }, 1000)
  }
  getPeople(){
    this.service.getPeople().subscribe(people =>{
      this.pessoas = people;
    })
  }
}
