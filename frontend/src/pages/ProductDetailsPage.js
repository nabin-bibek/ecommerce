import React from 'react'
import ProductDetails from '../features/product-list/components/ProductDetails'
import NavBar from '../features/navBar/NavBar'
const ProductDetailsPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetails></ProductDetails>
      </NavBar>
    </div>
  );
}

export default ProductDetailsPage
