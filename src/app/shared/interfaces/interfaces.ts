export interface IProduct {
    id: string
    name: string
    price: string | number
    quantity: number
    onCart: boolean         // used only on UI
}