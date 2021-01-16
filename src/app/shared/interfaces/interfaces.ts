export interface IProduct {
    id: string
    name: string
    price: number | string
    quantity: number
    onCart: boolean         // used only on UI
}