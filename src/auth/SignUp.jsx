import React, { useEffect, useState } from "react";
import jazzyLogo from "../assets/buger-logo.jpg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from 'react-icons/bs'; // Import icons from React Bootstrap

const SignUp = () => {
  const [isReveal, setIsReveal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.title = "Signup Page";
  });

  function handleToggle() {
    setIsReveal(!isReveal);
  }

  return (
    <>
      <main className="container vh-50 d-flex flex-column my-3">
        <div>
          <div className="text-center">
            <Link to="/">
              <img src={jazzyLogo} alt="jazzyLogo" />
            </Link>
          </div>
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            CREATE YOUR ACCOUNT
          </h2>
          {/* Form */}
          <Form className="w-75 m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* Input for First Name */}
            <Form.Label className="fs-6 text-secondary">First Name</Form.Label>
            <FloatingLabel
              controlId="floatingFirstName"
              label="First Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="John"
                className="border border-3 rounded-3"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-danger fw-bold">This field is required</span>
              )}
            </FloatingLabel>

            {/* Input for Last Name */}
            <Form.Label className="fs-6 text-secondary">Last Name</Form.Label>
            <FloatingLabel
              controlId="floatingLastName"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Doe"
                className="border border-3 rounded-3"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-danger fw-bold">This field is required</span>
              )}
            </FloatingLabel>

            {/* Input for Email */}
            <Form.Label className="fs-6 text-secondary">Email</Form.Label>
            <FloatingLabel
              controlId="floatingEmail"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="border border-3 rounded-3"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger fw-bold">This field is required</span>
              )}
            </FloatingLabel>

            {/* Input for Phone Number */}
            <Form.Label className="fs-6 text-secondary">Phone Number</Form.Label>
            <FloatingLabel
              controlId="floatingPhoneNumber"
              label="Phone Number"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="123-456-7890"
                className="border border-3 rounded-3"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span className="text-danger fw-bold">This field is required</span>
              )}
            </FloatingLabel>

            {/* Input for Password */}
            <Form.Label className="fs-6 text-secondary">Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type={isReveal ? "text" : "password"}
                placeholder="Password"
                className="border border-3 rounded-3"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-danger fw-bold">This field is required</span>
              )}
              {/* Show/hide toggle */}
              {isReveal ? (
                <BsEyeSlash
                  className="position-absolute end-0 top-50 translate-middle-y me-2"
                  onClick={handleToggle}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <BsEye
                  className="position-absolute end-0 top-50 translate-middle-y me-2"
                  onClick={handleToggle}
                  style={{ cursor: "pointer" }}
                />
              )}
            </FloatingLabel>

            {/* Input for Confirm Password */}
            <Form.Label className="fs-6 text-secondary">Confirm Password</Form.Label>
            <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
              <Form.Control
                type={isReveal ? "text" : "password"}
                placeholder="Confirm Password"
                className="border border-3 rounded-3"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span className="text-danger fw-bold">This field is required</span>
              )}
            </FloatingLabel>

            {/* Sign Up button */}
            <button className="btn btn-danger fs-3 text-white w-100 mt-3">
              create account
            </button>

            {/* Text below Sign Up button */}
            <p className="text-center mt-3 fw-bold">
              Already have an account? <Link to="/Signin" className="text-decoration-none">Sign In</Link>
            </p>
            
            {/* Agreement text */}
            <p className="text-center mt-3">
              By creating your Quickmunch account, you agree to the <Link to="/TermsOfUse" className="text-decoration-none">Terms of Use</Link> and <Link to="/PrivacyPolicy" className="text-decoration-none">Privacy Policy</Link>.
            </p>
          </Form>
        </div>
      </main>
    </>
  );
}

export default SignUp