import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  today = new Date();

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService
  ) {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ngOnChanges');
  //   console.log(changes);

  // }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('Añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }

  // product: Product = {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   };
}
