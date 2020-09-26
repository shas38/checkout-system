import Sku from "../../src/enums/sku";
import priceRules from '../../src/rules/priceRules';

describe('Tests for the vga price rules', () => {

  test('Should return zero', () => {

    //Arrange
    const price = 30;
    const items: { [key in Sku]?: Number }  = {
        [Sku.VGA]: 1,
        [Sku.MBP]: 1,
    }
    const atvPriceRules = priceRules[Sku.VGA];

    //Act
    const RESULT = atvPriceRules(items, price);

    //Assert
    expect(RESULT).toEqual(0);

  });

  test('Should return the price', () => {

    //Arrange
    const price = 30;
    const items: { [key in Sku]?: Number }  = {
        [Sku.VGA]: 3,
        [Sku.MBP]: 1,
    }
    const atvPriceRules = priceRules[Sku.VGA];

    //Act
    const RESULT = atvPriceRules(items, price);

    //Assert
    expect(RESULT).toEqual(price);

  });

  test('Should return the price', () => {

    //Arrange
    const price = 30;
    const items: { [key in Sku]?: Number }  = {
        [Sku.VGA]: 3,
    }
    const atvPriceRules = priceRules[Sku.VGA];

    //Act
    const RESULT = atvPriceRules(items, price);

    //Assert
    expect(RESULT).toEqual(price);

  });

})