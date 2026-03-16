import React,{useState,useEffect} from "react";
import axios from "axios";
import Product from "./Product";
import { useParams } from "react-router-dom";
const Products =()=>{
    const [products,setProducts]=useState([]);
    const{categoryId}=useParams();
    const getProducts=()=>{

        let url="http://localhost:5000/api/products";

        if(categoryId){
            url=`http://localhost:5000/api/products/category/${categoryId}`;
        }
          axios 
          .get(url)
          .then((res)=> setProducts(res.data.data || res.data))
          .catch((error)=> console.log(error));
    };
    
    useEffect(()=>{
        getProducts();
    },[categoryId]);
   
return(
   <div className="container">
    <h2 className="text-center">{categoryId ? "Category Products" : "All Products"}</h2>
    <div className="row">
        {
                products.map((product)=> <Product key={product._id} data={product}/>
                    
                    
                )}
    </div>
   </div>
)}
export default Products;