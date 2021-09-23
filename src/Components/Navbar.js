import React, { Component } from 'react'
import {Link} from "react-router-dom";

// rcep
export class Navbar extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <div className="container-fluid ">
    <Link className="navbar-brand text-success" to="/">NewsNodes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/business">business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/entertainment">entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/health">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/science">science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/technology">technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/sports">sports</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar

