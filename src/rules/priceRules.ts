import Sku from '../enums/sku'

export default {
    [Sku.ATV]: function(items, price){
        return (items[Sku.ATV]%3 !== 0) ? price : 0;
    },
    [Sku.IPD]: function(items, price, bulkPrice = 499.99){
        if(items[Sku.IPD] < 5) return price;
        else if(items[Sku.IPD] === 5) return bulkPrice - (price - bulkPrice) * 4;
        else return bulkPrice;
    },
    [Sku.VGA]: function(items, price){
        return items[Sku.MBP] && items[Sku.MBP] >= items[Sku.VGA]? 0 : price;
    },
}