import { setupProduct, setupCart } from "../factory";

describe("Cart", () => {
  it("should get summary brutto values of products in cart", () => {
    const cart = setupCart({
      products: [
        setupProduct({ prices: { sale: 10, regular: 20 }}),
        setupProduct({ prices: { sale: 10, regular: 20 }}),
      ],
    });
    const expectedBruttoValue = 30;
    expect(cart.getSummaryValue()).toEqual(expectedBruttoValue);
  });

  // it("should get summary netto value of products in cart", () => {
  //   const cart = setupCart({
  //     products: [
  //       setupProduct({ prices: { sale: 10, regular: 20 }, pctTax: 10 }),
  //       setupProduct({
  //         prices: { sale: 10, regular: 20 },
  //         pctTax: 10,
  //         sale: true,
  //       }),
  //     ],
  //   });
  //   const expectedNettoValue = 33;
  //   expect(cart.getSummaryValue("netto")).toEqual(expectedNettoValue);
  // });

  it("should return correct cart value for user story", () => {
    const cart = setupCart({ products: [] });
    const productX = setupProduct({ name: "X", prices: { sale: 0, regular: 300 } });
    const productY = setupProduct({ name: "Y", prices: { sale: 0, regular: 60 } });
    const productZ = setupProduct({ name: "Z", prices: { sale: 7, regular: 11 } });
    //add 1x product X - 300

    cart.addProductToCart(
      productX
    );
    //add 2x product Y - 60
    cart.addProductToCart(
      productY,
      2
    );
    //add 7x product Z - sale 7, regular 11
    cart.addProductToCart(
      productZ,
      7
    );
    //add product X again
    cart.addProductToCart(
      productX,
      1
    );

    // cart.getCombinedProducts()
  });
});

describe("User story", () => {
  const cart = setupCart({ products: [] });

  cart.addProductToCart(
    setupProduct({ name: "X", prices: { sale: 200, regular: 300 } })
  );
});
