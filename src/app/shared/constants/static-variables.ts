import { IProduct } from '../interfaces/interfaces';
import { Uuid } from './uuid';

export class Constants {
  static productList: Array<IProduct> = [
    {
      id: Uuid.MakeNew(),
      name: 'Volkswagen',
      price: 15900,
      quantity: 0,
      onCart: false
    },
    {
      id: Uuid.MakeNew(),
      name: 'Tommy Jeans',
      price: 59,
      quantity: 0,
      onCart: false
    },
    {
      id: Uuid.MakeNew(),
      name: 'Bicycle',
      price: 890,
      quantity: 0,
      onCart: false
    },
    {
      id: Uuid.MakeNew(),
      name: 'Nike Sneakers',
      price: 169,
      quantity: 0,
      onCart: false
    },
    {
      id: Uuid.MakeNew(),
      name: 'iPhone',
      price: 1290,
      quantity: 0,
      onCart: false
    },
    {
      id: Uuid.MakeNew(),
      name: 'One+',
      price: 790,
      quantity: 0,
      onCart: false
    },
    {
      id: Uuid.MakeNew(),
      name: 'Lenovo laptop',
      price: 1799,
      quantity: 0,
      onCart: false
    },
    {
      id: Uuid.MakeNew(),
      name: 'Vocabulary',
      price: 19,
      quantity: 0,
      onCart: false
    }
  ];

  static sort(
    arrayToSort: Array<any>,
    asc: boolean = true,
    columnToSort: string = 'price'
  ) {
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
    } else {
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

  static filterProducts(
    searchString: string,
    searchInArray: IProduct[]
  ): IProduct[] {
    let returnArray: IProduct[] = [];

    if (searchString.trim() == '') {
      returnArray = searchInArray.map((x) => Object.assign({}, x));
    } else {
      returnArray = searchInArray.filter(function (element) {
        return (
          element.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1
        );
      });
    }
    return returnArray;
  }
}
