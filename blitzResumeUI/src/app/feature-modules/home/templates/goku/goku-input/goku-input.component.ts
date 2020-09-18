import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { HomeService } from '../../../home.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-goku-input',
  templateUrl: './goku-input.component.html',
  styleUrls: ['./goku-input.component.css']
})
export class GokuInputComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  faInfoCircle = faInfoCircle;

  personalDetailsFormGroup: FormGroup;
  professionalDetailsFormGroup: FormGroup;
  educationDetailsFormGroup: FormGroup;
  additionalDetailsFormGroup: FormGroup;
  parentFormGroup: FormGroup;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private formBuilder: FormBuilder, private router: Router, private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.showAlerts = false;
    this.personalDetailsFormGroup = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      state: [''],
      city: [''],
      pincode: ['']
    });
    this.professionalDetailsFormGroup = this.formBuilder.group({
      objective: [''],
      skills: [[]],
      experience: this.formBuilder.array([this.createExperienceFormGroup()])
    });
    this.educationDetailsFormGroup = this.formBuilder.group({
      education: this.formBuilder.array([this.createEducationFormGroup()])
    });
    this.additionalDetailsFormGroup = this.formBuilder.group({
      additionalInfo: ['']
    });
    this.parentFormGroup = new FormGroup({
      personalDetailsForm: this.personalDetailsFormGroup,
      professionalDetailsForm: this.professionalDetailsFormGroup,
      educationDetailsForm: this.educationDetailsFormGroup,
      additionalDetailsForm: this.additionalDetailsFormGroup
    });
  }

  createEducationFormGroup(): FormGroup {
    return this.formBuilder.group({
      instituteName: '',
      instituteCity: '',
      qualification: '',
      marksObtained: '',
      totalMarks: 100,
      passDate: ''
    });
  }

  createExperienceFormGroup(): FormGroup {
    return this.formBuilder.group({
      companyName: '',
      companyCity: '',
      designation: '',
      startDate: '',
      endDate: '',
      workDesc: '',
      isPresent: false
    });
  }

  isPresentChanged(event: MatCheckboxChange, ind) {
    if (event.checked) {
      this.experienceFormArray.get(ind.toString()).get('endDate').setValue(new Date());
    } else {
      this.experienceFormArray.get(ind.toString()).get('endDate').setValue(null);
    }
  }

  get experienceFormArray(): FormArray {
    return this.parentFormGroup.get('professionalDetailsForm').get('experience') as FormArray;
  }

  get educationFormArray(): FormArray {
    return this.parentFormGroup.get('educationDetailsForm').get('education') as FormArray;
  }

  addCompany(): void {
    this.experienceFormArray.push(this.createExperienceFormGroup());
  }

  removeCompany(index) {
    this.experienceFormArray.removeAt(index);
  }

  addEducation(): void {
    this.educationFormArray.push(this.createEducationFormGroup());
  }

  removeEducation(index) {
    this.educationFormArray.removeAt(index);
  }

  viewResume() {
    this.homeService.showAlerts = true;
    this.homeService.parentFormValues = this.parentFormGroup.value;
    this.router.navigate(['template', 'goku', 'view']);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.professionalDetailsFormGroup.value.skills.push(value.trim());
      this.professionalDetailsFormGroup.get('skills').updateValueAndValidity();
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill): void {
    const index = this.professionalDetailsFormGroup.value.skills.indexOf(skill);

    if (index >= 0) {
      this.professionalDetailsFormGroup.value.skills.splice(index, 1);
      this.professionalDetailsFormGroup.get('skills').updateValueAndValidity();
    }
  }

}
