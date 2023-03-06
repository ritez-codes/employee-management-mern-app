import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Style.css"

function Navbar() {
     return (
          <div className='navbar'>
               <div className='logo-div'>
                    <h1 className='brand-name'>MERN App</h1>
               </div>
               <div className="navlist">
                    <NavLink className='navlink' to={"/"} >Employees</NavLink>
                    <NavLink className='navlink' to={"/create"} >Create</NavLink>
                    {/* <Link to={"/"} ></Link> */}
               </div>
               <div className='author'  >
                    Build by Riteswar with &hearts;
               </div>
          </div>
     )
}

export default Navbar
