interface Iitems { [key: string]: number; }
interface IpriceRules { [key: string]: (items: Iitems, price: number) => number; }
export default class CheckoutSystem{
    priceRules: IpriceRules
    items: Iitems
    totalPrice: number
    debug: boolean

    constructor(priceRules: IpriceRules, debug: boolean = false){
        this.priceRules = priceRules;
        this.debug = debug;
        this.items = {};
        this.totalPrice = 0;
    }

    scan(item){
        this.items[item.sku] = this.items[item.sku] + 1 || 1; 

        if(this.priceRules[item.sku]){
            this.totalPrice += this.priceRules[item.sku](this.items, item.price)
        }else{
            this.totalPrice += item.price;
        }

        if(this.debug) {
            console.log(`${item.name} scanned`)
            console.log(`Current total is $${this.totalPrice}`);
        }

        return this.totalPrice;
    }

    total(){
        if(this.debug) console.log(`The total price is $${this.totalPrice}`);
        return this.totalPrice;
    }
}