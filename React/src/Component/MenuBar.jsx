// import React from 'react'
// import Link from "react-router-dom";
// function MenuBar() {
//   return (
//     <div>
      
// <div className="">
//     <Link to="/">Home</Link>
// </div>

// <div className="">
//     <Link to="/product">Products</Link>
// </div>

// <div className="">
//     <Link to="dasboard">DashBoard</Link>
// </div>

//     </div>
//   )
// }

// export default  MenuBar;


import React from 'react'
import { Link } from 'react-router-dom'
export default function MenuBar() {
  return (
    <div>
     <div className="">
<Link to={'/'}>Home</Link>
     </div>

     <div className="">
<Link to={'/product'}>Product</Link>
     </div> 
     <div className="">
<Link to={'/dashboard'}>dashboard</Link>
     </div>
    </div>
  )
}
