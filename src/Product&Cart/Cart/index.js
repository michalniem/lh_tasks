// class Cart{
//   // uuid
//   // zawiera listę produktów
//   // można przeliczyć łączną wartość koszyka i łączną ilość produktów
//   // można dodawać i usuwać z niego produkty
//   // można zmieniać ilość produktu z listy
//   // można dodać rabat na pojedynczy produkt
//   // można w nim opis do koszyka
//   // zawiera datę utworzenia i datę ostatniej modyfikacji (podczas operacji na produktach zmienia sie data modyfikacji)
//   // można zatwiedzić koszyk i wtedy, użytkownik dostaje komunikat ile finalnie wyszło mu do zapłaty netto (bez podatku) i brutto (z podatkiem)
// }
import { v4 as uuidv4 } from "uuid";

const defaultParams = {
  products: [],
};

class Cart {
  constructor({ products } = defaultParams) {
    this.id = uuidv4();
    this.products = products;
    this.combinedProducts = this.combineProducts(products);
  }

  getSummaryValue = (type = "brutto") => {
    const isNetto = type === "netto";
    const summaryValue = this.products.reduce((acc, curr) => {
      return acc + (isNetto ? curr.getNettoValue() : curr.getBruttoValue());
    }, 0);
    return summaryValue;
  };

  getNumberOfProducts = () => this.products.length;

  addProductToCart = (product, count = 1) => {
    //instance of Product
    new Array(count).fill(0).forEach(() => {
      this.products.push(product);
    });
    console.log(
      `Product ${product.name} with id ${product.id} was successfully added ${count} times to the cart`
    );
  };

  removeProductFromCart = ({ id }) => {
    // product id sprawdzenie
    this.products = this.products.filter((product) => product.id !== id);
    console.log(
      `Product ${product.name} with id ${product.id} was successfully removed from the cart`
    );
    // return this.products;
  };

  setProductCount = (name, count) => {
    const existingElements =
      this.products.filter((product) => product.name === name) || [];
    const existingElementsCount = existingElements.length;

    // return this.products;
  };

  addDiscountForAllProducts = ({ name, discount }) => {
    this.products.forEach((product) => {
      if (product.name === name) {
        product.addDiscountToProduct(discount);
      }
    });
  };

  combineProducts = (products) => {
    return products.reduce((acc, curr) => {
      const existedElementIndex = acc.findIndex(
        (product) => product.name === curr.name
      );
      if (existedElementIndex !== -1) {
        ++acc[existedElementIndex].count;
      } else {
        curr.count = 1;
        acc.push(curr);
      }
      return acc;
    }, []);
  };

  // formatProducts = (products) => {
  //   return products.reduce((acc, curr, idx) => {
  //     const productInTheCart = acc.find(({ name }) => name === curr.name);
  //     if (productInTheCart) {
  //       acc[idx].count = productInTheCart.count + 1;
  //     } else {
  //       acc.push({ product: curr, count: 1 })
  //     }
  //     return acc;
  //   }, []);
  // }
}

export default Cart;
