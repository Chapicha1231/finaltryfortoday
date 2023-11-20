import { Component, Input, OnInit } from '@angular/core';
import { tech } from '../shared/models/tech';
import { ActivatedRoute, Router } from '@angular/router';
import { TechService } from '../services/tech/tech.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-tech-page',
  templateUrl: './tech-page.component.html',
  styleUrls: ['./tech-page.component.css']
})
export class TechPageComponent implements OnInit {
@Input()
 techPagetags?:string[];
  tech!: tech;

  
  constructor(private activatedRoute:ActivatedRoute, private techService: TechService,
    private cartService: CartService,
    private Router: Router,)
   {activatedRoute.params.subscribe((params) => {if(params['id'])
  this.tech = techService.getTechById(params['id']);
})
}
ngOnInit(): void {
  
}
addToCart(){
  this.cartService.addToCart(this.tech);
  this.Router.navigateByUrl('/cart-page');
}

}
