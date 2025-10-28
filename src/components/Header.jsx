import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Top support bar */}
      <div className="topbar py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img src="https://picsum.photos/60/60?logo" alt="logo" className="logo-img" />
            <div>
              <div className="brand-title">FOODMART</div>
              <div className="brand-sub">GROCERY STORE</div>
            </div>
          </div>

          <div className="search-area d-flex align-items-center">
            <div className="category-dropdown me-3">All Categories <i className="fa fa-chevron-down ms-1"></i></div>
            <div className="search-input d-flex align-items-center">
              <input className="form-control" placeholder="Search for more than 20,000 products" />
              <button className="btn btn-search ms-2"><i className="fa fa-search"></i></button>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="support">
              <div className="small">For Support?</div>
              <div className="fw-bold">+980-34984089</div>
            </div>
            <div className="icons d-flex gap-2">
              <button className="btn btn-circle"><i className="fa fa-user"></i></button>
              <button className="btn btn-circle"><i className="fa fa-heart"></i></button>
            </div>
            <div className="cart">
              <div className="small">Your Cart</div>
              <div className="fw-bold">$1290.00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
              <li className="nav-item"><a className="nav-link" href="#">Pages</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Sale</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
