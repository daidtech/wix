import * as React from 'react'
import './style.scss'
import { Link, useParams } from 'react-router-dom'

const AdminLayout = () => {
  let { adminTag } = useParams();

  React.useEffect(() => {
    console.log('changing...')
  })

  return (
    <div className='side-bar'>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light side-bar-content">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/admin/dashboard" className={`nav-link ${adminTag === "dashboard" && "active"}`} aria-current="page">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/home" className="nav-link link-dark">
              Home
            </a>
          </li>
          <li>
            <a href="/admin/orders" className="nav-link link-dark">
              Orders
            </a>
          </li>
          <li>
            <Link to="/admin/products" className='nav-link link-dark'>
              <i class="material-icons outlined">inventory</i>
              Products
            </Link>
          </li>
          <li>
            <a href="/admin/customers" className="nav-link link-dark">
              Customers
            </a>
          </li>
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout