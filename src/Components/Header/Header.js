import React from 'react'
import logo from '../../Assets/CodeChefChapterDDU logo (1).svg'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#00000a' }}>
            <div class="container-fluid">
                <Link to="/"><img src={logo} style={{ height: '13vmin', width: 'auto', objectFit: 'contain', marginRight: '20px', marginBottom: '0rem', marginLeft: '-0.2rem' }} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item p-1">
                            <Link to="/about" style={{ textDecoration: 'none' }}><a class="nav-l active" aria-current="page">About</a></Link>
                        </li>
                        <li class="nav-item p-1">
                            <Link to="/team" style={{ textDecoration: 'none' }}><a class="nav-l active" aria-current="page">Team</a></Link>
                        </li>
                        <li class="nav-item p-1 dropdown">
                            <a class="nav-l dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{ background: '#00000a' }}>
                                <li className="li-item" style={{ padding: '10px', fontSize: '3vmin', background: '#00000a', color: '#4c911a', borderBottom: '1px solid #efefef', cursor: 'pointer' }}>Upcoming events</li>
                                <li className="li-item" style={{ padding: '10px', fontSize: '3vmin', background: '#00000a', color: '#4c911a', borderBottom: '1px solid #efefef', cursor: 'pointer' }}>Past Events</li>
                                <li className="li-item" style={{ padding: '10px', fontSize: '3vmin', background: '#00000a', color: '#4c911a', borderBottom: '1px solid #efefef', cursor: 'pointer' }}>Contests</li>
                            </ul>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header
