import { IProduct } from "../interfaces/interfaces";
import { Uuid } from "./uuid";


export class Constants {

    static productList: Array<IProduct> = [
        { id: Uuid.MakeNew(), name: 'Car', price: "20000", quantity: 0, onCart: false },
        { id: Uuid.MakeNew(), name: 'Jeans', price: "50", quantity: 0, onCart: false },
        { id: Uuid.MakeNew(), name: 'Phone', price: "800", quantity: 0, onCart: false },
        { id: Uuid.MakeNew(), name: 'Computer', price: "1000", quantity: 0, onCart: false },
        { id: Uuid.MakeNew(), name: 'Book', price: "12", quantity: 0, onCart: false }
    ]


    static sort(arrayToSort: Array<any>, asc: boolean = true, columnToSort: string = 'price') {
        if (asc) {
            arrayToSort.sort(function (a: any, b: any) {
                if (Number(a[columnToSort]) < Number(b[columnToSort])) {
                    return -1;
                } else if (Number(a[columnToSort]) > Number(b[columnToSort])) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        else {
            arrayToSort.sort(function (a: any, b: any) {
                if (Number(a[columnToSort]) > Number(b[columnToSort])) {
                    return -1;
                } else if (Number(a[columnToSort]) < Number(b[columnToSort])) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }

        return arrayToSort;
    }


    static filterProducts(searchString: string, searchInArray: IProduct[]): IProduct[] {
        let returnArray: IProduct[] = [];

        if (searchString.trim() == '') {
            returnArray = searchInArray.map(x => Object.assign({}, x));
        } else {
            returnArray = searchInArray.filter(function (element) {
                return element.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1;
            });
        }
        return returnArray;
    }
}