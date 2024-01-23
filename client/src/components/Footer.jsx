import React from 'react'
import { Facebook, Instagram, Linkedin, Send, Twitter } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import qrCode from '../assets/Qr-Code.png'
import googlePlay from '../assets/google-play.png'
import appStore from '../assets/appstore.png'
import jackyIcon from '../assets/JackyIcon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  return (
    <div className='bg-text2 text-white'>
      <div className='xl:py-20 xl:mx-20 p-5 grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center'>
        <div>
            <img onClick={() => navigate('/')} className="md:pb-4 pb-2 w-12 cursor-pointer" src={jackyIcon} alt="icon" />
          <ul className=' space-y-3'>
            <li className='font-semibold text-lg'>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li className='flex items-center border rounded-lg pr-3'>
              <input className='w-[90%] p-3 bg-transparent outline-none' type="text" placeholder='Enter your email' /><Send className='w-[10%] cursor-pointer text-[20px] md:text-[50px]' />
            </li>
          </ul>
        </div>
        <div>
          <legend className='text-xl font-bold l my-4'>Support</legend>
          <ul className=' space-y-3 leading-relaxed'>
            <li>111 Beivjoy saroiani, Bakh,  GM 1515, Germany.</li>
            <li><Link className='hover:opacity-70' to="mailto:exclusive@gmail.com">exclusive@gmail.com</Link></li>
            <li><Link className='hover:opacity-70' to="tel:+88015-88888-9999">+88015-88888-9999</Link></li>
          </ul>
        </div>
        <div>
          <legend className='text-xl font-bold l my-4'>Account</legend>
          <ul className=' space-y-3  leading-relaxed'>
            <li><Link className='hover:opacity-70' to="/cart">Cart</Link></li>
            <li><Link className='hover:opacity-70' to="/favorite">Wishlist</Link></li>
            <li><Link className='hover:opacity-70' to="/all-products">Shop</Link></li>
          </ul>
        </div>
        <div>
          <legend className='text-xl font-bold l my-4'>Quick Link</legend>
          <ul className=' space-y-3  leading-relaxed'>
            <li><Link className='hover:opacity-70' to='/privacy'>Privacy Policy</Link></li>
            <li><Link className='hover:opacity-70' to='/terms'>Terms of use</Link></li>
            <li><Link className='hover:opacity-70' to='/faq'>FAQ</Link></li>
            <li><Link className='hover:opacity-70' to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <legend className='text-xl font-bold l my-4'>Download App</legend>
          <ul className=' space-y-3  leading-relaxed'>
            <li className='font-thin opacity-70'>Save $3 with App New User Only</li>
            <li className='grid grid-rows-2 grid-flow-col'>
              <img className='row-span-2' src={qrCode} alt="QR code" />
              <img className='col-span-12' src={googlePlay} alt="Google Play" />
              <img className='col-span-12' src={appStore} alt="App Store" />
            </li>
            <li className='flex items-center space-x-6 py-4'>
              <Facebook size='22' />
              <Twitter size='22' />
              <Instagram size='22' />
              <Linkedin size='22' />
            </li>
          </ul>
        </div>
      </div>
      <div className='py-4 text-center border-t border-primary'>
        <p className=' opacity-50 mt-3 font-thin'>&copy;{` Copyright Rimel ${currentYear}. All right reserved`}</p>
      </div>
    </div>
  )
}

export default Footer