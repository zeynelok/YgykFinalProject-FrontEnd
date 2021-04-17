import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor(private cartSercive:CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }
getCart(){
  this.cartItems=this.cartSercive.list();
}
removeFromCart(product:Product){
  this.cartSercive.removeFromCart(product);
  this.toastrService.error("Sepetten Silindi",product.productName);
}
}