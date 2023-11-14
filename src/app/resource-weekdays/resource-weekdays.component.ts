import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resource-weekdays',
  templateUrl: './resource-weekdays.component.html',
  styleUrls: ['./resource-weekdays.component.scss']
})
export class ResourceWeekdaysComponent implements OnInit {
  weekDaysForm!: FormGroup;
  advancedSettingsButton: boolean = true;
  normalSettingsButton: boolean = false;
  weekDaysData: any = [
    {
      id: 0,
      dayName: 'Saturday',
      dayStatus: false,
      startTime: '',
      endTime: '',
    },
    {
      id: 1,
      dayName: 'Sunday',
      dayStatus: true,
      startTime: '',
      endTime: '',
    },
    {
      id: 2,
      dayName: 'Monday',
      dayStatus: true,
      startTime: '',
      endTime: '',
    },
    {
      id: 3,
      dayName: 'Tusday',
      dayStatus: true,
      startTime: '',
      endTime: '',
    },
    {
      id: 4,
      dayName: 'Wednesday',
      dayStatus: true,
      startTime: '',
      endTime: '',
    },
    {
      id: 5,
      dayName: 'Thursday',
      dayStatus: true,
      startTime: '',
      endTime: '',
    },
    {
      id: 6,
      dayName: 'Friday',
      dayStatus: false,
      startTime: '',
      endTime: '',
    }
  ];
  constructor(
    private fb: FormBuilder,
    private transalte: TranslateService
  ) {
    console.log(this.weekDaysData[0].dayName)
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let recipeIngredients: any = new FormArray([]);
    for (let ingredient of this.weekDaysData) {
      recipeIngredients.push(
        new FormGroup({
          id: new FormControl(ingredient.id),
          dayName: new FormControl(ingredient.dayName),
          dayStatus: new FormControl(ingredient.dayStatus),
          startTime: new FormControl(''),
          endTime: new FormControl(''),
          newRow_Flag: new FormControl('add_circle')
        })
      )
    }
    this.weekDaysForm = new FormGroup({
      ingredients: recipeIngredients
    })
    console.log(this.weekDaysForm)
  }

  get weekDay(): FormArray {
    return (<FormArray>this.weekDaysForm.get('ingredients'));
  }
  addRemoveWeekDay(xx: any) {
    console.log(xx)
    console.log('xx.value.newRow_Flag', xx.value.newRow_Flag)
    if (xx.value.newRow_Flag == 'add_circle') { // insert row
      this.weekDay.insert(
        this.weekDay.controls.indexOf(xx) + 1,  // to get indexes of formGroups that inside formArray
        new FormGroup({
          id: new FormControl(xx.value.id),
          dayName: new FormControl(xx.value.dayName),
          dayStatus: new FormControl(true),
          startTime: new FormControl(null),
          endTime: new FormControl(null),
          newRow_Flag: new FormControl('remove_circle')
        })
      )
    } else { //remove row
      this.weekDay.removeAt(this.weekDay.controls.indexOf(xx))
    }
  }

  toggleSettings(value: string) {
    console.log(value)
    if (value == 'advancedSettings') {
      this.advancedSettingsButton = true;
      this.normalSettingsButton = false;
    } else {
      this.advancedSettingsButton = false;
      this.normalSettingsButton = true;
    }
  }

  printForm() {
    console.log(this.weekDaysForm)
  }

}
