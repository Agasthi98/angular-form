import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent {
  submitRecords: any[];
  storedData: any[] = [];

  constructor() {
    this.submitRecords = [];
  }
  /***
   * Form group & validations
   */
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9]+'),
      Validators.maxLength(10),
    ]),
    amount: new FormControl('', [Validators.required, Validators.min(100)]),
  });

  /**
   * Submit form
   */
  onSubmit() {
    const records = this.myForm.value;

    if (this.submitRecords.some((item: any) => item.email === records.email)) {
      alert('Email already exists');
      return;
    } else if (
      this.submitRecords.some((item: any) => item.phone === records.phone)
    ) {
      alert('Phone already exists');
      return;
    }

    /**
     * Push records to array
     */
    this.submitRecords.push(records);

    /**
     * sort array by amount
     */

    this.submitRecords.sort((a, b) => b.amount - a.amount);
    // Reset the form after submission
    this.myForm.reset();
  }

  /**
   * Delete record
   */

  onDelete(index: number) {
    this.submitRecords.splice(index, 1);
  }
}
