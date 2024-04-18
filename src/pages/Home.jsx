import {useEffect} from 'react'
import Hero from '../component/Hero'
import Product from '../component/Product'

const Home = () => {
 useEffect(()=>{
  document.title = "Home | page"
 })
  return (
    <>
    <main className="container">
      <Hero/>
      <Product/>
    </main>
    </>
  )
}

export default Home