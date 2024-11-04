import React from 'react'
import "./NavBar.style.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
       
        <div className='bg-lightGreen flex justify-between px-6 py-2 rounded-2xl w-[85%] mt-4 '>
            <div className='flex justify-center items-center'><img src="/Images/greeper_logo_1 1.png" alt="logo" height={110} width={110} /></div>
            <div className='flex justify-center items-center ml-8'>
                <div className='font-manrope text- mx-1 px-2'><Link to='/unternehmen'>Für Unternehmen</Link></div>
                <div className='font-manrope text- mx-1 px-2'><Link to='/services'>Für Kandidaten</Link></div>
                <div className='font-manrope text- mx-1 px-2'><Link to="/fachgibeite" >Über uns</Link></div>
                <div className='font-manrope text- mx-1 px-2'><Link to="/branchenexpertise">Blog</Link></div>
                <div className='font-manrope text- mx-1 px-2'>About</div>
            </div>
            <div className='flex justify-center items-center mr-3'>
                <div className='font-manrope border border-green text-green rounded-full px-7 py-[6px] h-max mx-2 text-[15px]'>Kontakt</div>
                <div className='font-manrope border   bg-black rounded-full px-7 py-[6px] text-[#B4FB85] h-max ml-2 text-[15px]'>CV-Check</div>
            </div>
        </div>
  
    )
}

export default NavBar