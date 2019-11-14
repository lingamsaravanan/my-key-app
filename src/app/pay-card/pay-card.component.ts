import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.css']
})

export class PayCardComponent implements OnInit {

  public widgetTitle = 'Pay Card';

  payCardForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.payCardForm = this.formBuilder.group({
        accountName: ['', Validators.required],
        amount: ['', Validators.required]
      });
  }

  get f() { return this.payCardForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.payCardForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.payCardForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.payCardForm.reset();
  }
}
