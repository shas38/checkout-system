import Sku from "../../src/enums/sku";
import priceRules from '../../src/rules/priceRules';

describe('Tests for the atv price rules', () => {

  test('Should return zero as this is the third atv', () => {

    //Arrange
    const price = 109.50;
    const items: { [key in Sku]?: Number }  = {
        [Sku.ATV]: 3,
    }
    const atvPriceRules = priceRules[Sku.ATV];

    //Act
    const RESULT = atvPriceRules(items, price);

    //Assert
    expect(RESULT).toEqual(0);

  });

  test('Should return the actual price of atv', () => {

    //Arrange
    const price = 109.50;
    const items: { [key in Sku]?: Number }  = {
        [Sku.ATV]: 1,
    }
    const atvPriceRules = priceRules[Sku.ATV];

    //Act
    const RESULT = atvPriceRules(items, price);

    //Assert
    expect(RESULT).toEqual(price);

  });

})