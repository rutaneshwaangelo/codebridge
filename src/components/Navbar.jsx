import {NavLink,Link} from "react-router-dom"; 
function Navbar(){
return(
<nav>
    <h2>codebridge academy</h2>
    <ul>
        <li>
            {/* <NavLink to="/">Home</NavLink> */}
            <link to="/">Home</link>
        </li>
        <li>
           {/* <NavLink to="/login">Login</NavLink> */}
           <link to='/login' >Login</link>
        </li>
        <li>
            {/* <NavLink to="/register">Register</NavLink> */}
            <link to='/register' >register</link>
        </li>
    </ul>
</nav>
)
}

export default Navbar;