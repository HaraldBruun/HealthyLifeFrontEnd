import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dropdown-skoler',
  templateUrl: './dropdown-skoler.component.html',
  styleUrls: ['./dropdown-skoler.component.css']
})
export class DropdownSkolerComponent implements OnInit {
  skoler: any = ['Sønderkærskolen', 'Holmegårdsskolen', 'Brøndby-Vester Skole'];

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
