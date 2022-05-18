import React from "react";
import { connect } from "dva";
import ProductList from "../components/ProductList";

function Prodcts({ dispatch, products }) {
  const handleDelete = (id) => {
    dispatch({ type: "products/deleteProduct", id });
  };

  const handleAdd = (product) => {
    dispatch({ type: "products/add", payload: product });
  };

  return (
    <div>
      <h2>Products</h2>
      <ProductList
        products={products}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default connect(({ products }) => ({
  products: products.products,
}))(Prodcts);
