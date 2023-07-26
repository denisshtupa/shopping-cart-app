import { IProduct } from '../shared/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  public productsURL: string = '/api/products-list';

  constructor(private _http: HttpClient) {}

  public getProductList(): Observable<IProduct[]> {
    const endpointUrl: string = `${environment.apiURL}${this.productsURL}`;
    return this._http.get<IProduct[]>(endpointUrl);
  }
}
