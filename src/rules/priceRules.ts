import Sku from '../enums/sku'
export default {
    [Sku.ATV]: function(items, price){
        return (items['atv']%3 !== 0) ? price : 0;
    },
    [Sku.IPD]: function(items, price, bulkPrice = 499.99){
        if(items['ipd'] < 5) return price;
        else if(items['ipd'] === 5) return bulkPrice - (price - bulkPrice) * 4;
        else return bulkPrice;
    },
}