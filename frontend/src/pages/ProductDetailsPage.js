import React from 'react'
import ProductDetails from '../features/product/components/ProductDetails'
import NavBar from '../features/navBar/NavBar'
import Footer from '../features/common/Footer';
const ProductDetailsPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetails></ProductDetails>
      </NavBar>
      <Footer/>
    </div>
  );
}

export default ProductDetailsPage
