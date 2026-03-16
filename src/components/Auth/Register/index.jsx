import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import React, { useState } from 'react'
import styles from './style.module.css';
const Register = () => {
const [requestResponse,setRequestResponse] = useState({
  message:"",
  className:""
});
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: ""
  };

  const onSubmit = (values) => {

  axios.post("http://localhost:5000/api/auth/register", values)
  .then((response)=>{

    setRequestResponse({
      message:"Registration successful",
      className:"alert alert-success"
    });

  })
  .catch(()=>{

    setRequestResponse({
      message:"Registration failed",
      className:"alert alert-danger"
    });

  });

};

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    mobile: Yup.string()
      .matches(/^\d{10}$/, "Invalid mobile number")
      .required("Mobile is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true
  });

  return (
    <div className="container">
      <div className={styles.wrapper}>
      <div className={requestResponse.className} role="alert">
        {requestResponse.message}
      </div>
      <h2 className="text-center ">Register</h2>

     
        
     

          <form className="card p-4 shadow" onSubmit={formik.handleSubmit}>

            <div className="mb-3">
              <label className="form-label">First Name</label>

              <input
                type="text"
                name="firstName"
                className={
                  formik.errors.firstName && formik.touched.firstName
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.firstName && formik.errors.firstName && (
                <span className="text-danger">
                  {formik.errors.firstName}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                name="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email && (
                <span className="text-danger">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile</label>

              <input
                type="text"
                name="mobile"
                className={
                  formik.errors.mobile && formik.touched.mobile
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.mobile && formik.errors.mobile && (
                <span className="text-danger">
                  {formik.errors.mobile}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>

              <input
                type="password"
                name="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.password && formik.errors.password && (
                <span className="text-danger">
                  {formik.errors.password}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!formik.isValid}
            >
              Register
            </button>

            <hr />

            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>

          </form>

        </div>
      </div>
    
  );
};

export default Register;