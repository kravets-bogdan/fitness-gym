// * Base
import { SharedModule } from '../../../../shared/shared.module';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// * Form
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

// * Service
import { FormService } from './form.service';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export default class FormComponent implements OnInit {
  // * Injects
  private readonly formService = inject(FormService);
  private readonly fb = inject(FormBuilder);
  // * Local
  protected form!: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.form.disable();
      this.formService.requestFeedback(this.form.value).subscribe({
        next: (response) => {
          this.form.enable();
          this.initForm();
        },
        error: (errorResponse) => {
          console.log('errorResponse: ', errorResponse);
          this.form.enable();
        },
      });
    }
  }

  isControlValid(controlName: string) {
    const control = this.form.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string) {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      notes: [''],
    });
  }
}
