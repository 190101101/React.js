import React, { useEffect, useState } from "react";

import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/NewProduct";
import useHttp from "./hooks/useHttp";

function App() {
//   const data = await response.json();
  

	const [products, setProducts] = useState([]);

	const manageProducts = (productsData) => {
		const loadedProducts = [];
		
		for (const productKey in productsData) {
			loadedProducts.push({ id: productKey, text: productsData[productKey].text });
		}
		setProducts(loadedProducts);
	}

    const httpRequestData =  useHttp({
      endpoint: 'https://react-lesson-d3b03-default-rtdb.firebaseio.com/products.json'
    }, manageProducts);

	const {isLoading, error, sendHttoRequest:fetchProducts} = httpRequestData;

    const productAddHandler = (product) => {
      setProducts((prevProducts) => prevProducts.concat(product));
    };

    useEffect(() => {
		fetchProducts();
	}, []);

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
