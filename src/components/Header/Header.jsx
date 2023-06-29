import React from 'react'
import './Header.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {RiShoppingCartFill} from 'react-icons/ri'

export default function Header(){
  return (
    <header>
        <div className="logo">
            <RiShoppingCartFill size={48}/>
            <div className="name">Anggi<span>Store</span></div>
        </div>
        <nav>
            <ul>
                <li>
                    <AiFillHome size={24}/>
                    <a href="#">Beranda</a>
                </li>
                <li>
                    <AiFillInfoCircle size={24}/>
                    <a href="#">Tentang</a>
                </li>
                <li>
                    <IoMdContact size={24}/>
                    <a href="#">Kontak</a>
                </li>
                <li>
                    <button>Login</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}
