import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular-iban';
import { GlobalValidator } from 'src/app/shared/utils/global-validator';
import { IPaymentDetails } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  @Input() isCheckoutStep: boolean = true;

  @Output() onNextTab = new EventEmitter();

  public paymentForm: FormGroup;
  get payForm() {
    return this.paymentForm.controls;
  }

  constructor(
    private _fb: FormBuilder
  ) {
    this.initPaymentForm();
  }

  ngOnInit() {
    this.patchPaymentForm();
  }


  private initPaymentForm() {
    this.paymentForm = this._fb.group({
      accountOwner: ['', [Validators.required, GlobalValidator.onlyLetters]],
      iban: ['', [Validators.required, ValidatorService.validateIban]],
    });
  }

  private patchPaymentForm() {
    let paymentObject: IPaymentDetails = JSON.parse(
      localStorage.getItem('payment')
    );

    if (paymentObject) {
      this.paymentForm.patchValue({
        accountOwner: paymentObject.accountOwner,
        iban: paymentObject.iban,
      });
    }
  }

  public selectTab(tabId: number) {
    let payment: IPaymentDetails = {
      accountOwner: this.payForm.accountOwner.value,
      iban: this.payForm.iban.value
    }
    localStorage.setItem("payment", JSON.stringify(payment));

    this.onNextTab.emit(tabId);
  }

}
