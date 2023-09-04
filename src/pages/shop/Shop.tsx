import { PRODUCTS } from "../../utils/products";
import { Item } from "../../components/Item/Item";

import { ShopContainer, ShopTitle, ProductsGrid } from "./Shop.style";

export const Shop = () => {
  return (
    <ShopContainer className="shop">
      <ShopTitle className="shopTitle">
        <h1>Iulian Shop</h1>
      </ShopTitle>

      <ProductsGrid className="products">
        {PRODUCTS.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ShopContainer>
  );
};
