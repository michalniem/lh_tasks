import { setupProduct } from "../factory";

describe("Product", () => {
  it("should correctly calculate brutto value if sale is false", () => {
    const product = setupProduct();
    expect(product.getBruttoValue()).toEqual(product.prices.regular);
  });

  it("should correctly calculate brutto value if sale is true", () => {
    const product = setupProduct({ sale: true });
    expect(product.getBruttoValue()).toEqual(product.prices.sale);
  });

  it("should correctly calculate netto value if sale is false", () => {
    const product = setupProduct();
    const calculatedNettoValue =
      product.prices.regular + product.prices.regular * product.pctTax * 0.01;
    expect(product.getNettoValue()).toEqual(calculatedNettoValue);
  });

  it("should correctly calculate brutto value if sale is true", () => {
    const product = setupProduct({ sale: true });
    const calculatedNettoValue =
      product.getBruttoValue() +
      product.getBruttoValue() * product.pctTax * 0.01;
    expect(product.getNettoValue()).toEqual(calculatedNettoValue);
  });
});
