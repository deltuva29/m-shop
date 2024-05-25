interface Card {
  id: number;
  img: string;
  name: string;
  price: number;
  priceWithSale: number;
  count?: number;
  sale?: number;
}

export { type Card };
