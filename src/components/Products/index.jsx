import React,{useState,useEffect} from "react";
import axios from "axios";
import Product from "./Product";
const Products =()=>{
    const [products,setProducts]=useState([]);
    const getProducts=()=>{
          axios 
          .get('http://localhost:5000/api/products')
          .then((res)=> setProducts(res.data))
          .catch((error)=> console.log(error));
    };
    
    useEffect(()=>{
        getProducts();
    },[]);
   
return(
   <div className="container">
    <h2 className="text-center">All Products</h2>
    <div className="row">
        {
                products.map((product)=> <Product key={product.id} data={product}/>
                    
                    
                )}
    </div>
   </div>
)}
export default Products;