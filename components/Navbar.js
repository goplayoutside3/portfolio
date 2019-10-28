import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <ul className="menu">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/moodboard">
        <a>Moodboard</a>
      </Link>
    </li>
  </ul>
);

export default Navbar
