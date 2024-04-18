import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import NavLogo from '../assets/buger-logo.jpg'
import LocationLogo from '../assets/location.svg'
import AllProduct from '../assets/allProduct.svg'
import Guest from '../assets/guest.svg'
import Cart from '../assets/cart.svg'
import AuthDropDown from '../component/AuthDropDown'
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import bag from '../component/Bag';



const NavBar = ({cartItem}) => {
  const [authShow, setAuthShow] = useState(false)
  const [bagShow, setBagShow] = useState(false)
  console.log(cartItem);
  return (
    <>
    <main className='container position-relative'>
      <nav className='container d-flex justify-content-between align-items-center'>
        <section className='d-flex align-items-center justify-content-between gap-3'> 
          <div>
            <Link to="/"/>
              <img src={NavLogo} alt="nav-logo" className="img-fliuid p-3"/>
            <Link/>
          </div>
          <div>
            <img src={LocationLogo} alt="LocationLogo" className='d-none d-lg-block' />
          </div>
          <h5 className='d-none d-lg-block text-danger'>Lagos, Nigeria</h5>
        </section>
        <section className='d-flex justify-content-between align-items-center gap-4'>
          <img src={AllProduct} alt="All Product" />
          <h5 className='d-none d-lg-block text-danger mt-3'>All Product</h5>
          <div className='d-flex gap-3 position-relative' role='button' onClick={()=> !authShow ? setAuthShow(true) : setAuthShow(false)}>
            <img src={Guest} alt="guest-logo" />
            <h5 className='d-none d-lg-block mt-3 text-secondary'>Hi Guest</h5>
            
            {!authShow ? (
              <div className="d-none d-lg-block mt-3">
                <GoChevronDown/>
              </div>
            ):
            (
              <div className="d-none d-lg-block mt-3">
                <GoChevronUp/> 
              </div>
            )
            }
            <div className='position-absolute top-100 end-0 mt-3'>
              {authShow && <AuthDropDown/>}
            </div>
          </div>

          <div onClick={()=> (!bagShow ? setBagShow(true) : setBagShow(false))}>
            <div className='position-relative'>
              <div className='position-absolute top-0 start-100 translate-middle bg-danger text-light rounded-circle w-50 text-center h-75 fw-bold'>
                <p>{cartItem.length} </p>
              </div>
              <img role='button' src={Cart} alt="nav-cart" /> 
            </div>
          </div>
        </section>
      </nav>
      <div className='position-abosolute end-0'>{bag}</div>
      <Outlet/>
    </main>
    </>
  )
}

export default NavBar