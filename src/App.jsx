import { useState } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './layout/AppLayout'
import Details from './pages/Details'
import Cart from './pages/Cart'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<Details />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
