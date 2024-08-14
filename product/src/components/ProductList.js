import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = ({ productsMy, loaded, removeFromDom }) => {
  

  console.log(productsMy)

  if (!loaded) {
    return (<p>Loading...</p>);
  } else {
    return (
      <div>
        <h1>All Products</h1>
        <ul>
          {productsMy && productsMy.map((item, key) => (
            <li key={key}>
              <Link to={`/product/${item._id}`}>{item.title}</Link> |{" "}
              <button onClick={() => removeFromDom(item._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ProductList;
