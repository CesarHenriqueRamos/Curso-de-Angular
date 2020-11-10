import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss']
})
export class ReactiveSearchComponent implements OnInit {

  queryFilde = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
  onSherch(){
    console.log(this.queryFilde.value);
  }
}
