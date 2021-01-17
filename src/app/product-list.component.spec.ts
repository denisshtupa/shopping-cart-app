import { BsModalService } from 'ngx-bootstrap/modal';
import { TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

describe('ProductListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductListComponent
      ],
      providers: [
        BsModalService,
        ComponentLoaderFactory,
        PositioningService
      ]
    }).compileComponents();
  });

  it('should create', () => {
    expect(ProductListComponent).toBeTruthy();
  });

  it(`should have as title 'Shopping cart'`, () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Shopping cart');
  });

  it('should render shopping cart icon', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#cart-icon').textContent).toEqual(' shopping_cart ');
  });

  it('Table rows should be 5', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
    let trs = fixture.nativeElement.querySelectorAll('tr');
    expect(trs.length).toBe(6);
  })

  it('Used material icons should be 21', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
    let trs = fixture.nativeElement.querySelectorAll('.material-icons');
    expect(trs.length).toBe(21);
  })
});
