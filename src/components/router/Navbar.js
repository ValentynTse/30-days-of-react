import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
   const navLinkStyles = ({ isActive }) => {
      return {
         fontWeight: isActive ? 'bold' : 'normal',
         textDecoration: isActive ? 'none' : 'underline',
      }
   }

   const auth = useAuth()
   return (
      <>
         <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
         </nav>
         <nav className="primary-nav">
            <NavLink style={navLinkStyles} to='/'>
               Home
            </NavLink>
            <NavLink style={navLinkStyles} to='/about'>
               About Us
            </NavLink>
            <NavLink style={navLinkStyles} to='/products'>
               Products
            </NavLink>
            <NavLink style={navLinkStyles} to='/users'>
               Users
            </NavLink>
            <NavLink style={navLinkStyles} to='/profile'>
               Profile
            </NavLink>
            {!auth.user && (
               <NavLink style={navLinkStyles} to='/login'>
                  Login
               </NavLink>
            )}
         </nav>
      </>
   )
};