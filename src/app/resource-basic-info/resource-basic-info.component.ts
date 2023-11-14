import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-basic-info',
  templateUrl: './resource-basic-info.component.html',
  styleUrls: ['./resource-basic-info.component.scss']
})
export class ResourceBasicInfoComponent implements OnInit {
  fileName = '';
  imageSrc!: any;
  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
  }
  }

}
