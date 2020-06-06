import Product from "./Product";
import Cart from "./Cart";

export const setupProduct = (overridedProps = {}) =>
  new Product({
    name: "exampleProduct",
    description: "exampleDescription",
    tags: ["exampleTag"],
    sale: false,
    prices: { sale: 90.99, regular: 120 },
    pctTax: 23,
    discount: 0,
    ...overridedProps,
  });

export const setupCart = (overridedProps = {}) =>
  new Cart({
    products: [
      setupProduct({ name: "ExampleProduct1" }),
      setupProduct({ name: "ExampleProduct2" }),
      setupProduct({ name: "ExampleProduct3" }),
      setupProduct({ name: "ExampleProduct4" }),
    ],
    ...overridedProps,
  });
