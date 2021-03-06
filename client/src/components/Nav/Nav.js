import React from 'react'

function Nav() {
    return (
        <>
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/JZDavidson">J.Z. Davidson</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current='page' href="/aboutme">About Me</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/portfolio">Portfolio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/resume">Resume</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/contact">Contact</a>
  </li>
</ul>
        </>
    )
}

export default Nav
