import React,{useState,useEffect}from 'react';
import { Link,Links,useNavigate } from 'react-router-dom';

const Navbar =()=>{
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const onLogoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <Link class="navbar-brand" to="/">MyShop</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={`/`}>Home </Link>
        
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to={`/products`}>Products</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to={`/about`}>About </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to={`/orders`}>My Orders</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to={`/contact`}>Contact </Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {!isLoggedIn ?(
        <Link to ="/login" class ="btn btn-primary">Login</Link>
      ):(
         <button class="btn btn-danger" onClick={onLogoutHandler}>LogOut</button>
      )}
        </form>
  </div>
</nav>
    )
}
export default Navbar;