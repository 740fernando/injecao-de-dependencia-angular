import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  persons: Array<any> = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(result => {
      this.persons = result.results;
      console.log(this.persons)
    })
  }
}
