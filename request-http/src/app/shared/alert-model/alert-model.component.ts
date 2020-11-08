import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-model',
  templateUrl: './alert-model.component.html',
  styleUrls: ['./alert-model.component.scss']
})
export class AlertModelComponent implements OnInit {
  @Input() mesage:string;
  @Input() type = 'success';

  constructor() { }

  ngOnInit(): void {
  }

}
