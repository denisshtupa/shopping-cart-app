export interface IProduct {
    id: string
    name: string
    price: number | string
    quantity: number
    onCart?: boolean         // used only on UI
}


export interface IShippingDetails {
    firstName: string
    secondName: string
    address: string
    tel: string | number
}

export interface IPaymentDetails {
    accountOwner: string
    iban: string
}
