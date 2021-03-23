import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {

    this.product$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.productsService.getProduct(params.id);
        })
      );
      /*.subscribe((product) => {
        this.product$ = product;
      }); */

    }

  // this.product = this.productsService.getProduct(id);

  // fecthProduct(id: string) {
  //   this.productsService.getProduct(id)
  //   .subscribe(product => {
  //     this.product = product;
  //   });
  // }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
    console.log(product);

    });
  }

  updateProduct() {
    const updatedProduct: Partial<Product> = {
      price: 3555,
      description: 'edicion titulo'
    };
    this.productsService.updateProduct('2', updatedProduct)
    .subscribe(product =>{
      console.log(product);
    });

  }

  deleteProduct() {
    this.productsService.deleteProduct('19')
    .subscribe(rta => {
      console.log(rta);

    });
  }

  getRandomUsers() {
    this.productsService.getRandomUsers()
      .subscribe(
        users => {
          console.log(users);
        },
        error => {
          console.error(error);
        }
      );
  }

  getFile() {
    this.productsService.getFile()
      .subscribe(content => {
        console.log(content);
      });
  }

}
