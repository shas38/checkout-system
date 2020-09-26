import Sku from "../../src/enums/sku";
import priceRules from '../../src/rules/priceRules';
import CheckoutSystem from '../../src/services/checkoutSystem';

describe('Tests for the getItems method of checkoutSystem class', () => {

  test('Should dictionary of item counts', () => {

    //Arrange
    const expectedResult = {
      [Sku.IPD]: 1,
      [Sku.MBP]: 1,
    }
    const ipd = {sku: Sku.IPD, name: 'Super iPad', price: 549.99};
    const mbp = {sku: Sku.MBP, name: 'MacBook Pro', price: 1399.99};
    const checkoutSystem = new CheckoutSystem({});

    //Act
    checkoutSystem.scan(ipd);
    checkoutSystem.scan(mbp);
    const items = checkoutSystem.getItems();

    //Assert
    expect(items).toMatchObject(expectedResult);
  });

})