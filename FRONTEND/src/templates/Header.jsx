import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export function HeaderTemplate() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <NavLink to="/" onClick={closeMenu}><img src="/ChatGPT Image Dec 11, 2025, 12_24_05 PM.png" alt="MonSite Logo" /></NavLink>
                </div>
                
                <button className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </button>

                <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={closeMenu}
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/chatbot" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={closeMenu}
                            >
                                Chatbot IA
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={closeMenu}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
            </div>
        </header>
    )
}


