// import React from "react";

// const Navbar = () => {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
//                 <div class="container">
//                     <a class="navbar-brand fw-bold fs-4" href="#">
//                         <img src="/assets/3.jpg" width="50" height="50" alt="" />
//                         Deals And Coupons Finder App
//                     </a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="/deals">Deals</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="/coupons">Coupons</a>
//                             </li>
//                         </ul>
//                         <div className="buttons">
//                             {sessionStorage.getItem("token") == "" &&
//                                 <>
//                                     <a href="/login" className="btn btn-outline-dark">
//                                         <i className="fa fa-sign-in me-2"></i>Login</a>
//                                     <a href="/signup" className="btn btn-outline-dark ms-2">
//                                         <i className="fa fa-user-plus me-2"></i>Signup</a>
                                     
//                                 </>
//                             }
//                             <a href="/cartdeal" className="btn btn-outline-dark ms-2">
//                                 <i className="fa fa-shopping-cart me-2"></i>Cart</a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// }
// export default Navbar; 

// import React from "react";

// const Navbar = () => {
//     const handleLogout = () => {
//         sessionStorage.removeItem('token');
//         window.location.reload(); // or redirect to the login page
//     };

//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
//                 <div class="container">
//                     <a class="navbar-brand fw-bold fs-4" href="#">
//                         <img src="/assets/3.jpg" width="50" height="50" alt="" />
//                         Deals And Coupons Finder App
//                     </a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="/deals">Deals</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="/coupons">Coupons</a>
//                             </li>
//                         </ul>
//                         <div className="buttons">
//                             {sessionStorage.getItem("token") == "" ? (
//                                 <>
//                                     <a href="/login" className="btn btn-outline-dark">
//                                         <i className="fa fa-sign-in me-2"></i>Login</a>
//                                     <a href="/signup" className="btn btn-outline-dark ms-2">
//                                         <i className="fa fa-user-plus me-2"></i>Signup</a>
//                                 </>
//                             ) : (
//                                 <button onClick={handleLogout} className="btn btn-outline-dark">
//                                     <i className="fa fa-sign-out me-2"></i>Logout</button>
//                             )}
//                             <a href="/cartdeal" className="btn btn-outline-dark ms-2">
//                                 <i className="fa fa-shopping-cart me-2"></i>Cart</a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// }
// export default Navbar;    

//method 3 
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.reload(); // or redirect to the login page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <img src="/assets/3.jpg" width="50" height="50" alt="" />
            Deals And Coupons Finder App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deals">
                  Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coupons">
                  Coupons
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="buttons">
              {sessionStorage.getItem("token") === "" ? (
                <>
                  <Link to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-2"></i>Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-2"></i>Signup
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-dark"
                >
                  <i className="fa fa-sign-out me-2"></i>Logout
                </button>
              )}
              <Link to="/cartdeal" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2"></i>Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;