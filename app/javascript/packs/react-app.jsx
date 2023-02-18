// // Run this by adding <%= javascript_pack_tag 'react-app' %> to the head of your layout file,


import React from 'react'

import { createRoot } from 'react-dom/client';
import './react-app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/components/shop/home'
import AdminLayout from '../src/layouts/admin'
import Products from '../src/components/admin/products'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={ <Home/> } />
        <Route path='/admin' element={ <AdminLayout/> } />
        <Route path='/admin/products' element={ <Products/> } />
      </Routes>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('react-app')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
})