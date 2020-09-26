import Sku from "../../src/enums/sku";
import CheckoutSystem from '../../src/services/checkoutSystem';

describe('Tests for the total method of checkoutSystem class', () => {

  test('Shpuld return the total price', () => {

    //Arrange
    const ipd = {sku: Sku.IPD, name: 'Super iPad', price: 549.99};
    const mbp = {sku: Sku.MBP, name: 'MacBook Pro', price: 1399.99};
    const checkoutSystem = new CheckoutSystem({});

    //Act
    checkoutSystem.scan(ipd);
    checkoutSystem.scan(ipd);
    const totalPrice = checkoutSystem.scan(mbp);

    //Assert
    expect(totalPrice).toEqual(2 * ipd.price + mbp.price);
  });

})