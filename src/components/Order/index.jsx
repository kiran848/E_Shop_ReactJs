import { useEffect, useState } from "react";
import axios from "axios";

const Order = () => {

  const [orders,setOrders] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(()=>{
    fetchOrders();
  },[]);

  const fetchOrders = async () => {

    try{

      const res = await axios.get(
        "http://localhost:5000/api/orders",
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      setOrders(res.data.data);

    }
    catch(err){
      console.log(err);
    }

  };

  return(
    <div className="container">

      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (

        orders.map(order => (
          <div key={order._id} className="card p-3 mb-3">

            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
            <p><strong>Status:</strong> {order.status}</p>

          </div>
        ))

      )}

    </div>
  );
};

export default Order;