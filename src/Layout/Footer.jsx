// import React from 'react'
import question from '../assets/question.png'
import padLock from '../assets/sevenPadlock.png'
import appStore from '../assets/appstore.png'
import googlePlay from '../assets/googlePlay.svg'
import facebook from '../assets/facebook.svg'
import istagram from '../assets/istagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.png'
import "../style/footer.css"


const Footer = () => {
  return (
   <>
   <footer className='bg-black'>
    <main className="text-white container py-5">
      <section className="d-lg-flex justify-content-between">
        <div className="flex-column-reverse flex-lg-row d-flex gap-5">
          <div className="d-lg-flex gap-3">
            <img src={question} alt="24/7 logo" />
            <h2 className='support'>
              24/7 <spam>Support</spam>
            </h2>
          </div>
          <div className="d-lg-flex padlock gap-3">
            <img src={padLock} alt="24/7"/>
            <h2>100% <br /> <span>Payment secured</span> </h2>
          </div>
        </div>
        <div className="d-lg-flex gap-4">
          <div>
            <img src={appStore} alt="apple image" />
          </div>
          <div>
            <img src={googlePlay} alt="google play" />
          </div>
        </div>
      </section>
      <section>
        <div className='details text-lg-start'>
          <h3>Need Help</h3>
          <p className='text-decoration-underline fw-bold'>+234 907 466 6655</p>
          <p className='text-decoration-underline fw-bold'>help@jazzysburger.com</p> <br /><br />
          <h3>FOOLOW US</h3>
          <div className='d-flex gap-2'>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={istagram} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </section>
    </main>
   </footer>
   <p className='text-center'>&copy; JJB Concepts <span className="fw-bold"> . </span> Developed by our Digital LLC</p>
   </>
  )
}

export default Footer