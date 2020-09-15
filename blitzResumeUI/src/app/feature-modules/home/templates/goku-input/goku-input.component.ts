import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-goku-input',
  templateUrl: './goku-input.component.html',
  styleUrls: ['./goku-input.component.css']
})
export class GokuInputComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
