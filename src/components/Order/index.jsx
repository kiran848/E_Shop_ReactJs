import React,{ useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
const Order = () => {

  const [orders,setOrders] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(()=>{
    fetchOrders();
  },[]);

  const fetchOrders = async () => {

    try{

      const res = await axios.get(
        "http://localhost:5000/api/order",
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      setOrders(res.data.data || []);

    }
    catch(err){
      console.log(err);
    }

  };

  return(
    <div className="container">
      <div className={styles.wrapper}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (

        orders.map((order) => (
          <div className="order-card mb-4 p-3 shadow-sm" key={order._id}>

            <h5>Order ID: {order._id}</h5>
            <p><strong>Status:</strong> {order.status}</p>

            <div className="row">

              {order.items?.map((item) => (

                <div className="col-md-3" key={item._id}>
                  <div className="product-card">

                    <img
                      src={item.product?.image}
                      alt={item.product?.name}
                      className="img-fluid product-img"
                    />

                    <h6>{item.product?.name}</h6>
                    <p className="price">₹{item.price}</p>

                  </div>
                </div>

              ))}

            </div>

          </div>
        ))

      )}

    </div>
    </div>
  );
};

export default Order;