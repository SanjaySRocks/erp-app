'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
              <Link className="navbar-brand" href="/">College ERP App</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                  { (pathname === "/" || pathname === "/login") && 
                  <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login">Login</Link>
                  </li>

                  </>
                }

                { (pathname === "/student/dashboard" || pathname === "/faculty/dashboard") && 
                  <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/student/dashboard">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/student/profile">Profile</Link>
                  </li>
                  </>
                }

                </ul>
              </div>
            </div>
          </nav>
          </>
    )
  }