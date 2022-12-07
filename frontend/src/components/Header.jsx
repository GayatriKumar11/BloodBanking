import React from 'react'

export const Header = () => {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="/">Blood Banking</a></h1>


                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Types of Donation</a></li>
                            <li><a className="nav-link scrollto" href="/find-centre">Find a Blood Centre</a></li>
                            <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Donation</a>

                </div>
            </header>
        </>
    )
}
export default Header;