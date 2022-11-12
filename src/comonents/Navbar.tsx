import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple lighten-2 px1 ">
                <a href="/" className="brand-logo">React+Typescript</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Головна сторінка</a></li>
                    <li><a href="/about">Інформація</a></li>
                </ul>
            </div>
        </nav>
    )
}