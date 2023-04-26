import React from 'react'
import classes from './Header.module.css'
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <h1>ZPay</h1>
      </nav>
      <div className={classes['header-body']}>
      <div className={classes['header-title']}>
        <Fade left>
        <h1>
        Modern online and offline payments for Africa
        </h1>
        </Fade>
        <p>ZPay helps businesses in Africa get paid by anyone, anywhere in the world</p>
      </div>
      <button className='btn'>Create a free account</button>
      <p className={classes['header-foot']}>Trusted by 60,000 businesses</p>
      </div>
    </header>
  )
}

export default Header
