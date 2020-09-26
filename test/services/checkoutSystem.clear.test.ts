import Sku from "../../src/enums/sku";
import CheckoutSystem from '../../src/services/checkoutSystem';

describe('Tests for the clear method of checkoutSystem class', () => {

  test('Should set totoalPrice to zero and items to empty dictionary', () => {

    //Arrange
    const ipd = {sku: Sku.IPD, name: 'Super iPad', price: 549.99};
    const mbp = {sku: Sku.MBP, name: 'MacBook Pro', price: 1399.99};
    const checkoutSystem = new CheckoutSystem({});

    //Act
    checkoutSystem.scan(ipd);
    checkoutSystem.scan(mbp);
    checkoutSystem.clear();
    const total = checkoutSystem.total();
    const items = checkoutSystem.getItems();

    //Assert
    expect(total).toEqual(0);
    expect(items).toMatchObject({});
  });

})