import Sku from '../enums/sku'
export default {
    [Sku.ATV]: function(items, price){
        return (items['atv']%3 !== 0) ? price : 0;
    },
}