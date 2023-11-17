import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent {
  //   selectedProduct: any;
  //   products: Product[] = [];

  //   constructor(private productService: ProductService) {}

  //   ngOnInit(): void {

  //     this.getAllProducts();
  //   }

  // getAllProducts(){
  //   this.productService.getProducts().subscribe(data => {
  //     if(data){
  //       this.products = data.products;
  //     }
  //   });
  // }

  searchText: string = '';
  products: Product[] = [];
  selectedProduct: Product | null = null;
  skip = 0;
  limit = 10;

  constructor(private productService: ProductService) {}

  onSearchTextChange(): void {
    if (this.searchText.length >= 3) {
      this.getAllProducts();
    } else {
      this.products = [];
      this.clearSelection();
    }
  }

  getAllProducts() {
    this.productService
      .getAllProducts(this.skip, this.limit)
      .subscribe((response) => {
        console.log(response);
        if (response) {
          this.products = response.products
            .filter((product) =>
              product.title
                .toLowerCase()
                .includes(this.searchText.toLowerCase())
            )
            .slice(0, 10);
        }
      });
  }

  onProductSelect(product: Product): void {
    this.selectedProduct = product;
    this.searchText = product.title;
    this.products = [];
  }

  clearSelection(): void {
    this.selectedProduct = null;
    this.searchText = '';
  }
}
