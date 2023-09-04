import React, { useEffect, useState } from "react";

import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/NewProduct";

function App() {
  // "https://react-lesson-d3b03-default-rtdb.firebaseio.com/products.json"

    // const data = await response.json();

    // const loadedProducts = [];

    // for (const productKey in data) {
    //     loadedProducts.push({ id: productKey, text: data[productKey].text });
    // }
    // setProducts(loadedProducts);

    useEffect(() => {
      fetchProducts();
    }, []);

    const productAddHandler = (product) => {
      setProducts((prevProducts) => prevProducts.concat(product));
    };

    return (
      <React.Fragment>
        <NewProduct onAddProduct={productAddHandler} />
        <Products
            items={products}
            loading={isLoading}
            error={error}
            onFetch={fetchProducts}
        />
      </React.Fragment>
    );
}

export default App;
