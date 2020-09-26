import Sku from "../../src/enums/sku";
import priceRules from '../../src/rules/priceRules';

describe('Tests for the ipd price rules', () => {

  test('Should return the price of ipd', () => {

    //Arrange
    const price = 549.99;
    const bulkPrice = 499.99;
    const items: { [key in Sku]?: Number }  = {
        [Sku.IPD]: 2,
    }
    const ipdPriceRules = priceRules[Sku.IPD];

    //Act
    const RESULT = ipdPriceRules(items, price, bulkPrice);

    //Assert
    expect(RESULT).toEqual(priceRules);

  });

  test('Should return the bulk price of ipd minus the dicounts for the previous four ipds', () => {

    //Arrange
    const price = 549.99;
    const bulkPrice = 499.99;
    const items: { [key in Sku]?: Number }  = {
        [Sku.IPD]: 5,
    }
    const ipdPriceRules = priceRules[Sku.IPD];

    //Act
    const RESULT = ipdPriceRules(items, price, bulkPrice);

    //Assert
    expect(RESULT).toEqual(bulkPrice - (price - bulkPrice) * 4);

  });

  test('Should return the bulk price of ipd', () => {

    //Arrange
    const price = 549.99;
    const bulkPrice = 499.99;
    const items: { [key in Sku]?: Number }  = {
        [Sku.IPD]: 6,
    }
    const ipdPriceRules = priceRules[Sku.IPD];

    //Act
    const RESULT = ipdPriceRules(items, price, bulkPrice);

    //Assert
    expect(RESULT).toEqual(bulkPrice);

  });

})