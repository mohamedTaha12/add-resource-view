import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resource-add',
  templateUrl: './resource-add.component.html',
  styleUrls: ['./resource-add.component.scss']
})
export class ResourceAddComponent implements OnInit {
  addResourceForm!: FormGroup;
  checked = false;
  disabled = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  buildForm() {
    this.addResourceForm
  }



}
