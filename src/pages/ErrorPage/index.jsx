import { Link } from "react-router-dom";
const ErrorPage=()=>{
    return (
        <>
 <div
        style={{
          background: "#f5d15d",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          className="text-center"
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
          }}
        >
          <h1 style={{ fontSize: "90px" }}>🚫</h1>

          <h1 style={{ fontSize: "70px", color: "red" }}>404</h1>

          <h3>Oops! Page Not Found 😕</h3>

          <p>The page you are looking for does not exist.</p>

          <Link to="/" className="btn btn-primary">
            🏠 Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;