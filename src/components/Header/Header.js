import React from 'react'
import { NavLink } from 'react-router-dom';

const header = () => {
  return (
    <header className="header fixed w-full text-center border-b-2 shadow-md pt-3 mb-5 bg-gradient-to-b from-indigo-700 to-indigo-500 text-gray-100 z-10">
      <h1>Testing</h1>
      <p className="text-lg font-semibold">Testing http requests with React</p>
      <nav className="max-w-screen-xl">
        <ul className="text">
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/new-post">New Post</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default header
