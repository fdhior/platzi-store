import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainer implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {

    this.fetchProducts();

  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }


}
