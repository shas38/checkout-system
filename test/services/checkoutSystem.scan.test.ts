import Sku from "../../src/enums/sku";
import CheckoutSystem from '../../src/services/checkoutSystem';

describe('Tests for the scan method of checkoutSystem class', () => {

  test('Should add up the price of ipd and mbp', () => {

    //Arrange
    const ipd = {sku: Sku.IPD, name: 'Super iPad', price: 549.99};
    const mbp = {sku: Sku.MBP, name: 'MacBook Pro', price: 1399.99};
    const checkoutSystem = new CheckoutSystem({});

    //Act
    const totalPrice1 = checkoutSystem.scan(ipd);
    const totalPrice2 = checkoutSystem.scan(mbp);

    //Assert
    expect(totalPrice1).toEqual(ipd.price);
    expect(totalPrice2).toEqual(ipd.price + mbp.price);
  });

})