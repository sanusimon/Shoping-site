import Link from 'next/link'
import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header className='header'>
        <div className='container'>
            <div className='inner_'>
                <div className='logo'>
                    <h1>LOGO</h1>
                </div>
                <div className='navigation'>
                    <ul>
                        <li><Link href={{}}>Home</Link></li>
                        <li><Link href={{}}>About</Link></li>
                        <li><Link href={{}}>Boys</Link></li>
                        <li><Link href={{}}>Girls</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header> 
  )
}

export default Header