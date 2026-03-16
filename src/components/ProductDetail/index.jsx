import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
    const {id}=useParams();
  const [product, setProduct] = useState({});

  const getProductDetail = () => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
   
      getProductDetail();
    
  }, [id]);

  return (
    <div className="container">
        <h2 className="text-center">Product Description</h2>
      <div className="row">

        <div className="col-md-5">
            <div className="wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        </div>

        <div className="col-md-7">
            <div className="wrapper">
          <h2>{product.title}</h2>

          <h4 className="text-success">${product.price}</h4>

          <p>{product.description}</p>

          <p>
           <strong>Category:</strong> {product.category}
          </p>

          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;


