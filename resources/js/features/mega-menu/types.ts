interface Link {
  label: string;
  href: string;
}

interface Category {
  category: string;
  subcategories: SubCategory[];
}

interface SubCategory {
  subcategory: string;
  subSubCategories: SubSubCategory[];
}

interface SubSubCategory {
  subSubCategory: string;
  links: Link[];
}

interface Props {
  isOpen: boolean;
  data: Category[];
}

export { type Link, type Category, type SubCategory, type SubSubCategory, type Props }
