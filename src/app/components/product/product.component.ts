import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  selectedProduct: any;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    this.getAllProducts();
  }

getAllProducts(){
  this.productService.getProducts().subscribe(data => {
    if(data){
      this.products = data.products;
    }
  });
}

}
