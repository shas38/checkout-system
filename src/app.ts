import Sku from "./enums/sku";
import CheckoutSystem from './services/checkoutSystem';
import priceRules from './rules/priceRules';


const ipd = {sku: Sku.IPD, name: 'Super iPad', price: 549.99};
const mbp = {sku: Sku.MBP, name: 'MacBook Pro', price: 1399.99};
const atv = {sku: Sku.ATV, name: 'Apple TV', price: 109.50};
const vga = {sku: Sku.VGA, name: 'VGA adapter', price: 30};

const co = new CheckoutSystem(priceRules, true)

co.scan(atv);
co.scan(atv);
co.scan(atv);
co.scan(vga);
co.total();
co.clear();
console.log('----------------------------------------------------------------------')

co.scan(atv);
co.scan(ipd);
co.scan(ipd);
co.scan(atv);
co.scan(ipd);
co.scan(ipd);
co.scan(ipd);
co.total();
co.clear();
console.log('----------------------------------------------------------------------')

co.scan(mbp);
co.scan(vga);
co.scan(ipd);
co.total();
co.clear();