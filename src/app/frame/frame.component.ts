import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  selected: any = 'din mor';
  oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration', 'Din mor'];

  constructor(public fb: FormBuilder) { }

  oppoSuitsForm = this.fb.group({
    name: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.oppoSuitsForm.value));
  }
  ngOnInit(): void {
  }
}
