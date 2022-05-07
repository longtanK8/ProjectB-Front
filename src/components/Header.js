import React from "react"
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Booking from "./Booking";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Login from "./Login";
import About from './About'


class Header extends React.Component {
    state = {
        links: [
            {
                id: 1,
                name: "Link1",
                to: "/index",
                className: ""
            },
            {
                id: 2,
                name: "Link2",
                to: "/about",
                className: ""
            },
            {
                id: 3,
                name: "Link3",
                to: "/facility",
                className: "list"
            },
            {
                id: 4,
                name: "Link4",
                to: "/booking",
                className: "list"
            },
            {
                id: 5,
                name: "Link5",
                to: "/signup",
                className: ""
            },
            {
                id: 6,
                name: "Link6",
                to: "/login",
                className: ""
            }
        ],
        activeLink: null
    };

    handleClick = id => {
        this.setState({ activeLink: id });
    };
    render() {
        const { links, activeLink } = this.state;
        return (
            <div className="header" id="home">
                <div className="video-responsive">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/jBAEjBL5K_Y?start=9&autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="desktop-menu">
                    <div className="top-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <p className="top-header-content1"><i className="fa fa-map-marker" aria-hidden="true" />555 Chanh Phu Hoa, Ben Cat, Binh Duong</p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <p className="top-header-content2"><i className="fa fa-phone" aria-hidden="true" /> 08.38 409 092</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p className="top-header-fontawesome">
                                        <a href><i className="fa fa-facebook" aria-hidden="true" /></a>
                                        <a href><i className="fa fa-instagram" aria-hidden="true" /></a>
                                        <a href><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    </p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p className="top-header-account">
                                        <a href><i className="fa fa-user" /></a>
                                        <a href>danhdang</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                        <Link to={'/index'}><img src={require('../images/logo.png')} alt="logo" loading="lazy" /></Link>
                        <ul className="menu">
                            <li onClick={() => this.handleClick(links[0].id)}
                                className={
                                    links[0].className +
                                    (links[0].id === activeLink ? " active" : "")
                                }
                            >
                                <Link to="/index">Home</Link></li>
                            <li onClick={() => this.handleClick(links[1].id)}
                                className={
                                    links[1].className +
                                    (links[1].id === activeLink ? " active" : "")
                                }
                            >
                                <Link to="/about">About Us</Link></li>
                            <li onClick={() => this.handleClick(links[2].id)}
                                className={
                                    links[2].className +
                                    (links[2].id === activeLink ? " active" : "")
                                }
                            >

                                <Link to="/facility">Facilites</Link>
                                <ul className="sub-menu">
                                    <li><a href="#">Swimming Pool</a></li>
                                    <li><a href="#">Room Facilites</a></li>
                                    <li><a href="#">Restaurant</a></li>
                                </ul>
                            </li>
                            <li onClick={() => this.handleClick(links[3].id)}
                                className={
                                    links[3].className +
                                    (links[3].id === activeLink ? " active" : "")
                                }
                            >

                                <Link to={'/booking'}>Booking</Link>
                                <ul className="sub-menu">
                                    <li><a href="#">Single room</a></li>
                                    <li><a href="#">Double room</a></li>
                                    <li><a href="#">Quad room</a></li>
                                    <li><a href="#">Queen room</a></li>
                                </ul>
                            </li>
                            <li onClick={() => this.handleClick(links[4].id)}
                                className={
                                    links[4].className +
                                    (links[4].id === activeLink ? " active" : "")
                                }
                            >
                                <Link to={'/signup'}>Signup</Link></li>
                            <li onClick={() => this.handleClick(links[5].id)}
                                className={
                                    links[5].className +
                                    (links[5].id === activeLink ? " active" : "")
                                }
                            >
                                <Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/index' element={<Homepage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/booking' element={<Booking />} />
                    <Route path='/about' element={< About />} />
                </Routes>
            </div>
        )

    }
}

setTimeout(() => {
    let list = document.querySelectorAll('.menu > *');
    let head = document.getElementsByClassName('desktop-menu')[0];
    document.addEventListener('scroll', function (e) {
        if (document.documentElement.scrollTop > 50) {
            head.classList.add("fix-search");

        } else {
            head.classList.remove("fix-search");

        }
    });

}, 100);




export default Header;