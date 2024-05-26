import { ref } from "vue";
import { trans } from "laravel-vue-i18n";
import product1JPG from "@/assets/product-1.jpg";

const saleInfo = ref({
  title: trans('Discount sale'),
  listLinkText: trans('View all discounts'),
  listLinkHref: "/",
});

const saleItems = ref([{
  id: 0,
  img: product1JPG,
  name: trans('MacBook Pro 2024'),
  sale: 50,
  price: 50.50,
  priceWithSale: 44.50,
  count: 0,
}]);

export { saleInfo, saleItems };
