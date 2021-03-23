import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {

    it('should return products', () => {

      // arrange
      const expectData = [
        {
          id: '1',
          title: 'any',
          price: 1122,
          description: 'some description',
          image: 'img/img.jpg'
        },
        {
          id: '2',
          title: 'any other',
          price: 1122,
          description: 'some other description',
          image: 'img/img2.jpg'
        }
      ];

      let dataError, dataResponse;
      // act
      service.getAllProducts()
        .subscribe(response => {
          dataResponse = response;
        }, error => {
          dataError = error;
        });

      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);
      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();

    });

  });

});

