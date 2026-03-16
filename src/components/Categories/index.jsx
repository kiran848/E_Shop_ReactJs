import React ,{useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import {useNavigate} from "react-router-dom";
const Categories =()=>{
    const [categories,setCategories]=useState([]);
    const navigate=useNavigate();
    const getCategories=()=>{
          axios 
          .get('http://localhost:5000/api/categories')
          .then((res)=> setCategories(res.data.data))
          .catch((error)=> console.log(error));
    };
    
    useEffect(()=>{
        getCategories();
    },[]);
   
    const openCategory=(id)=>{
        navigate(`/products/category/${id}`);
    }

    return(
        <div className="container">
            <h2 className="text-center">Categories</h2>
            <div className="row">
                {
                categories.map((category)=> <Category key={category._id} data={category} openCategory={openCategory}/>
                    
                    
                )}
             </div>
        </div>
    );
};
export default Categories;