import React, { useState } from 'react'
import footer from '../css/footer.module.css'

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  console.log(year);
  return year
}

function Footer() {
  const [currentDate, setCurrentDate] = useState(getDate())
  
  return (
    <footer className={footer.wrap}>
      <div className={footer.ftr}>
        &copy; {currentDate}  &hearts; <a className={footer.mail} href="mailto:kate.blbn@gmail.com">Kate Blbn</a>  - Built with React
      </div>
    </footer>
  )
}

export default Footer