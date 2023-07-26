import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidator } from 'src/app/shared/utils/global-validator';
import { IShippingDetails } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  @Input() isCheckoutStep: boolean = true;

  @Output() onNextTab = new EventEmitter();

  public shippingDetailsForm: FormGroup;
  get shipForm() {
    return this.shippingDetailsForm.controls;
  }

  constructor(
    private _fb: FormBuilder
  ) {
    this.initShippingDetailsForm();
  }


  ngOnInit() {
    this.patchShippingDetailsForm();
  }

  private initShippingDetailsForm() {
    this.shippingDetailsForm = this._fb.group({
      firstName: ['', [Validators.required, GlobalValidator.onlyLetters]],
      lastName: ['', [Validators.required, GlobalValidator.onlyLetters]],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      tel: ['', [Validators.required, GlobalValidator.phoneNumberFormat]],
    });
  }

  private patchShippingDetailsForm() {
    let shippingDetailsObject: IShippingDetails = JSON.parse(
      localStorage.getItem('shipping')
    );

    if (shippingDetailsObject) {
      this.shippingDetailsForm.patchValue({
        firstName: shippingDetailsObject.firstName,
        lastName: shippingDetailsObject.lastName,
        address: shippingDetailsObject.address,
        postalCode: shippingDetailsObject.postalCode,
        tel: shippingDetailsObject.tel,
      });
    }
  }

  public selectTab(tabId: number) {
    let shipping: IShippingDetails = {
      firstName: this.shipForm.firstName.value,
      lastName: this.shipForm.lastName.value,
      address: this.shipForm.address.value,
      postalCode: this.shipForm.postalCode.value,
      tel: this.shipForm.tel.value,
    };
    localStorage.setItem('shipping', JSON.stringify(shipping));

    this.onNextTab.emit(tabId);
  }


}
