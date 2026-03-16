import { Link } from "react-router-dom";

const Product=(props)=>{
    const{id,title,image,price}=props.data;
    return (
  <div className="col-md-3 mb-4">
    <div className="card h-100">
        <img src={image}  className = "card-img-top" alt={title} style={{ height: "200px", objectFit: "cover",padding:"10px" }}/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h5>Price: ${price}</h5>
      
        <Link to={`/products/${id}`} class="btn btn-primary btn-block">Show Details</Link>
      </div>
    </div>
  </div>
    )


}
export default Product;