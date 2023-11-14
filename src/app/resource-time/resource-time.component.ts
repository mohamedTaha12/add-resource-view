import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resource-time',
  templateUrl: './resource-time.component.html',
  styleUrls: ['./resource-time.component.scss']
})
export class ResourceTimeComponent implements OnInit {
  value2: number = 0
  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
