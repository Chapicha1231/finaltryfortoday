import { tech } from "./tech";

export class CartItem{
    constructor(tech:tech){
      this.tech = tech;  
    }
    tech:tech;
    quantity:number = 1;

    get price():number{
        return this.tech.price * this.quantity;
    }
}