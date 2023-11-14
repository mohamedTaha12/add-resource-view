import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incr-decr-input',
  templateUrl: './incr-decr-input.component.html',
  styleUrls: ['./incr-decr-input.component.scss']
})
export class IncrDecrInputComponent implements OnInit {
  value1: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
