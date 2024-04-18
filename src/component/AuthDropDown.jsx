import {useState} from 'react'
import { Link } from 'react-router-dom'
import LogInLogo from '../assets/Login.svg'
import SignUpLogo from '../assets/SignUp.svg'

const AuthDropDown = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  return (
    <>
    <main className='container shadow-lg border rounded bg-light p-2'>
      <div className='d-flex flex-column gap-3 m-3'>
        {isLoggedIn ?
        <>
        <Link className='btn btn-primary text-light f-5'>LogOut</Link>
        <Link className='btn btn-primary text-light f-5'>Order</Link>
        </> :
        <>
        <div className='d-flex bg-primary border rounded p-2 gap-3'>
          <img src={LogInLogo} alt="LogInLogo" />
          <Link className='btn btn-primary text-light f-5' to='/SignIn'>LogIn</Link>
        </div>
        
        <div>
          <img src={SignUpLogo} alt="SignUpLogo" />
        <Link className='btn text-danger fw-bolder' to='/SignUp'>SignUp</Link> 
        </div>
        
        </>
        }
      </div>
    </main>
    </>
  )
}

export default AuthDropDown