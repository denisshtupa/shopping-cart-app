import { GlobalValidator } from './../shared/constants/global-validator';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IProduct } from '../shared/interfaces/interfaces';
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
        this.addedProducts = this.products.filter(x => x.onCart)
    }

    public onCloseIconClickHandler() {
        this.closeModalClicked.emit();
    }

    public selectTab(tabId: number) {
        this.staticTabs.tabs[tabId].active = true;
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

    private initPaymentForm() {
        this.paymentForm = this._fb.group({
            accountOwner: ['', [Validators.required, GlobalValidator.onlyLetters]],
            iban: ['', [Validators.required, ValidatorService.validateIban]]
        });
    }
}