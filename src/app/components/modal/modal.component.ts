import { IShippingDetails, IPaymentDetails } from '../../shared/interfaces/interfaces';
import { GlobalValidator } from '../../shared/constants/global-validator';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IProduct } from '../../shared/interfaces/interfaces';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular-iban';

@Component({
    selector: 'custom-modal',
    templateUrl: './modal.component.html'
})
export class CustomModalComponent {

    @Input() products: IProduct[] = [];
    @Output() closeModalClicked = new EventEmitter();
    @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

    public addedProducts: IProduct[];
    public shippingDetailsForm: FormGroup;
    get shipForm() {
        return this.shippingDetailsForm.controls;
    };
    public paymentForm: FormGroup;
    get payForm() {
        return this.paymentForm.controls;
    };

    constructor(private _fb: FormBuilder) {
        this.initShippingDetailsForm();
        this.initPaymentForm();
    }

    ngOnInit() {
        this.addedProducts = this.products.filter(x => x.onCart);
        this.patchPaymentForm();
        this.patchShippingDetailsForm();
    }

    public onCloseIconClickHandler() {
        this.closeModalClicked.emit();
    }

    public selectTab(tabId: number, mode: string = "") {
        this.staticTabs.tabs[tabId].active = true;
        if (mode == "shipping" && this.shippingDetailsForm.valid) {
            let shipping: IShippingDetails = {
                firstName: this.shipForm.firstName.value,
                secondName: this.shipForm.secondName.value,
                address: this.shipForm.address.value,
                tel: this.shipForm.tel.value
            }
            localStorage.setItem("shipping", JSON.stringify(shipping));
        }
        if (mode == "payment" && this.paymentForm.valid) {
            let payment: IPaymentDetails = {
                accountOwner: this.payForm.accountOwner.value,
                iban: this.payForm.iban.value
            }
            localStorage.setItem("payment", JSON.stringify(payment));
        }
    }

    public selectTabConditionally(tabId: number, isValid: boolean) {
        if (isValid) {
            this.staticTabs.tabs[tabId].active = true;
        } else {
            return;
        }
    }

    public formatToGermanCurrency(product: IProduct): string {
        let totalPrice = Number(product.price) * product.quantity;
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(totalPrice))
    }

    public totalPrice(): string {
        let totalPrice: number = 0;
        this.addedProducts.forEach(x => {
            totalPrice += Number(x.price) * x.quantity
        });
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(totalPrice.toString()));
    }

    public removeQuantity(product: IProduct) {
        product.quantity--
    }

    public addQuantity(product: IProduct) {
        product.quantity++
    }

    public removeProduct(product: IProduct) {
        this.addedProducts = this.addedProducts.filter(x => x.id != product.id);
    }

    private initShippingDetailsForm() {
        this.shippingDetailsForm = this._fb.group({
            firstName: ['', [Validators.required, GlobalValidator.onlyLetters]],
            secondName: ['', [Validators.required, GlobalValidator.onlyLetters]],
            address: ['', Validators.required],
            tel: ['', [Validators.required, GlobalValidator.phoneNumberFormat]]
        });
    }

    private patchShippingDetailsForm() {
        let shippingDetailsObject: IShippingDetails = JSON.parse(localStorage.getItem("shipping"));

        if (shippingDetailsObject) {
            this.shippingDetailsForm.patchValue({
                firstName: shippingDetailsObject.firstName,
                secondName: shippingDetailsObject.secondName,
                address: shippingDetailsObject.address,
                tel: shippingDetailsObject.tel
            })
        }
    }

    private initPaymentForm() {
        this.paymentForm = this._fb.group({
            accountOwner: ['', [Validators.required, GlobalValidator.onlyLetters]],
            iban: ['', [Validators.required, ValidatorService.validateIban]]
        });
    }

    private patchPaymentForm() {
        let paymentObject: IPaymentDetails = JSON.parse(localStorage.getItem("payment"));

        if (paymentObject) {
            this.paymentForm.patchValue({
                accountOwner: paymentObject.accountOwner,
                iban: paymentObject.iban
            })
        }

    }
}
