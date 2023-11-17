import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  // detailData: any;
  // productImageUrl: string = '';
  // detailImages: any;

  // @ViewChild('content') content!: ElementRef;
  // @Input() product?: Product;

  // productDetail() {
  //   if (this.product) {
  //     this.detailData = this.product;
  //   }
  // }

  // openModal() {
  //   this.content.nativeElement.style.display = 'block';
  //   this.detailData = this.product;
  //   this.productImageUrl = this.detailData.thumbnail;
  //   this.detailImages = this.detailData.images;
  // }

  // closeModal() {
  //   this.content.nativeElement.style.display = 'none';
  // }

  @Input() product!: Product;
}
