import { ref } from "vue";
import { trans } from "laravel-vue-i18n";
import product1JPG from "@/assets/product-1.jpg";

const saleInfo = ref({
  title: trans('Discount sale'),
  listLinkText: trans('View all'),
  listLinkHref: "/",
});

const saleItems = ref([
  {
    id: 0,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 50,
    price: 1550.50,
    priceWithSale: 1744.50,
    count: 0,
  },
  {
    id: 1,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 50,
    price: 2050.50,
    priceWithSale: 3044.50,
    count: 0,
  },
  {
    id: 2,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 50,
    price: 2350.50,
    priceWithSale: 3144.50,
    count: 0,
  },
  {
    id: 3,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 50,
    price: 2250.50,
    priceWithSale: 3644.50,
    count: 0,
  },
  {
    id: 4,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 50,
    price: 3750.50,
    priceWithSale: 5044.50,
    count: 0,
  }
]);

const newInfo = ref({
  title: trans('New products'),
  listLinkText: trans('View all'),
  listLinkHref: "/",
});

const newItems = ref([
  {
    id: 0,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 0,
    price: 1550.50,
    priceWithSale: 1744.50,
    count: 0,
  },
  {
    id: 1,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 0,
    price: 2050.50,
    priceWithSale: 3044.50,
    count: 0,
  },
  {
    id: 2,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 0,
    price: 2350.50,
    priceWithSale: 3144.50,
    count: 0,
  },
  {
    id: 3,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 0,
    price: 2250.50,
    priceWithSale: 3644.50,
    count: 0,
  },
  {
    id: 4,
    img: product1JPG,
    name: trans('MacBook Pro 2024'),
    sale: 0,
    price: 3750.50,
    priceWithSale: 5044.50,
    count: 0,
  }
]);

export { saleInfo, saleItems, newInfo, newItems };
