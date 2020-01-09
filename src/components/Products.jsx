import React, { Component } from "react";
import "../assets/styles/products.scss";
import products from "../data/products";

class Products extends Component {
  state = {
    searchValue: ""
  };

  render() {
    return (
      <div className="main-products">
        <div className="side-draw">
          Shop by category
          <ul>
            <li>New</li>
            <li>All</li>
            <li>Earings</li>
            <li>Bracelets</li>
            <li>RIngs</li>
          </ul>
        </div>
        <div>
          <h1>Women's Jewellery</h1>
          {products ? (
            <div id="meals-container">
              {products.map((product, index) => (
                <div className="single-meal" key={index}>
                  <img src={product.productImage} alt={product.productName} />
                  <p>{product.productName}</p>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Try searching for a meal</p>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
