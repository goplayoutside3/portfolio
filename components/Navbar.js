import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <ul className="menu">
    <img src="/images/longboard.svg" height="200px" />
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
)

export default Navbar
