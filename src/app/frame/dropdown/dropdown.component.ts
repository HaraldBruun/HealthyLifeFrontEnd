import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  kommuner: any = ['Brøndby', 'Hvidovre', 'A-Town'];

  constructor(public fb: FormBuilder) { }
  formGroup = this.fb.group({
    name: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.formGroup.value));
  }
  ngOnInit(): void {
  }
}
