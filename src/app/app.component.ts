import { Component, HostBinding, OnInit, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  calculatorForm: any = FormGroup;
  stockValue: number = 0;
  isSubmitted: boolean = false;
  
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  constructor (private formBuilder: FormBuilder) {
    effect(() =>{
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()))
    })
  }

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  ngOnInit(): void {
    this.calculatorForm = this.formBuilder.group({
      expectedDividend: [null, Validators.required],
      discountRate: [null, Validators.required],
      growthRate: [null, Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    
    if (this.calculatorForm.valid && this.calculatorForm.value.discountRate !> this.calculatorForm.value.growthRate) {
      const expectedDividend = this.calculatorForm.value.expectedDividend;
      const discountRate = this.calculatorForm.value.discountRate / 100;
      const growthRate = this.calculatorForm.value.growthRate / 100;
  
      this.stockValue = expectedDividend / (discountRate - growthRate);
    }
  }

  onReset() {
    this.isSubmitted = false;
    this.calculatorForm.reset();
    this.stockValue = 0;
  }
  
}
