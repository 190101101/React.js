import { useState } from "react";

import Section from "../UI/Section";
import ProductForm from "./ProductForm";
import useHttp from "../../hooks/useHttp";

const NewProduct = (props) => {
  const {isLoading, error, sendHttoRequest:sendProduct} = useHttp();

  const createProduct = (productText, productData) => {
      const generatedId = productData.name;
      const createdProduct = { id: generatedId, text: productText };
      props.onAddProduct(createdProduct);
  }

  const enterProductHandler = async (productText) => {
    sendProduct({
      endpoint: "https://react-lesson-d3b03-default-rtdb.firebaseio.com/products.json",
      method: "POST",
      body: {text:productText},
      headers: {
        "Content-Type": "application/json",
      },
    }, createProduct.bind(null, productText));
  };

  return (
    <Section>
      <ProductForm onEnterProduct={enterProductHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewProduct;
