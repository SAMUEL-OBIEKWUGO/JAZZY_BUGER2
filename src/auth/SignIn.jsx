import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Logo from '../assets/buger-logo.jpg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const SignIn = () => {
  const [isReveal, setIsReveal] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  function handleToggle(){
    !isReveal ? setIsReveal(true) : setIsReveal(false)
  }
  useEffect(()=>{
    document.title = 'Login | page'
  })
  return (
   <>
   <main>
    <div>
      <div className='text-ceter'>
        <Link to='/'>
          <img src={Logo} alt="jazzy-logo" />
        </Link>
      </div>
      <h2 className="fs-3 fw-bold my-3 text-ceter w-75 m-auto">SIGN IN TO YOUR ACCOUNT</h2>
      <Form className='w-75 m-auto' onSubmit={handleSubmit(onSubmit)}> 
        <Form.Label className="fs-6 text-secondary">Email</Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" className='border border-3 rounded-4' {...register("email", { required: true })}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type={isReveal ? "text": "password"} placeholder="Password" className='border border-3 rounded-3 position-relative' {...register("password",{ required: true })}/>
        {errors.password && <span className='text-danger fw-bold'>This field is required</span>}
        <p className="position-absolute end-0 top-0 mt-3 me-2" role='button' onClick={handleToggle}>{isReveal ? "hide":"show"}</p>
      </FloatingLabel>
      {/* Below is for check and balance */}
      <div className='d-flex justify-content-between mt-3'>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={"Keep me sign in"}
            className='fs-6 fw-bold'
          />

        </div>
      ))}
      <Link className='text-decoration-none' to="#">
      Reset Password
      </Link>
      </div>
      <button className="btn btn-danger text-white fs-3 w-100">
        Sign In 
      </button>
      <p>Do not have a account?
        <Link className='text-decoration-none' to='/SignUp'>Create One</Link>
      </p>
      </Form>
    </div>
   </main>
   </>
  )
}

export default SignIn