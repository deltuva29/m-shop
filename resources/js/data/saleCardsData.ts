import { trans } from 'laravel-vue-i18n';
import product1JPG from "@/assets/product-1.jpg";
import { reactive } from "vue";
import type { CardsProps } from "@/Widgets/Cards";

export const saleCards = reactive<CardsProps>({
  data: {
    title: trans('Discount sale'),
    listLinkText: trans('View all discounts'),
    listLinkHref: "/",
    items: [
      {
        id: 0,
        img: product1JPG,
        name: trans('MacBook Pro 2024'),
        sale: 50,
        price: 50.50,
        priceWithSale: 44.50,
        count: 0,
      }
    ]
  }
});
