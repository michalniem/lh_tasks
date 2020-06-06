import { v4 as uuidv4 } from "uuid";

const defaultParams = {
  name: "",
  description: "",
  category: "",
  tags: [],
  sale: false,
  prices: { sale: 0, regular: 0 },
  pctTax: 0,
  discount: 0,
};

class Product {
  constructor({
    name,
    description,
    category,
    tags,
    sale,
    prices,
    pctTax,
    discount,
  } = defaultParams) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
    this.category = category;
    this.tags = tags;
    this.sale = sale;
    this.prices = prices;
    this.pctTax = pctTax;
    this.discount = discount;
  }

  getBruttoValue = () => {
    const { sale, regular } = this.prices;
    return (this.sale ? sale : regular) - this.discount;
  };

  addDiscountToProduct = (discount) => {
    this.discount = discount;
  };

  getNettoValue = () => {
    const nettoValue =
      this.getBruttoValue() + this.getBruttoValue() * this.pctTax * 0.01;
    return nettoValue;
  };
}

export default Product;
