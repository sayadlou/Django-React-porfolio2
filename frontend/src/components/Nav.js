import Footer from "./Footer";
import {Link} from "react-router-dom";
import React from "react";

const   Nav = ({background}) => {
    return (
        <div style={{backgroundColor: background}}>
            <div className="container">
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: background}}>
                    <Link className="navbar-brand" to="#">
                        <img src="logo.png" alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active ms-lg-5" aria-current="page"  to="/">صفحه
                                    نخست</Link>
                            </li>
                            <li className="nav-item ">
                                <p className="nav-link" >پروژه های اجرا شده</p>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contactus" >ارتباط با ما</Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" >اخبار</p>
                            </li>
                            <Link className="nav-item" to="/dashboard">
                                <p className="nav-link">Dashboard</p>
                            </Link>
                            <li className="nav-item">
                                <p className="nav-link" >آموزشگاه مجازی</p>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/aboutus">درباره ما</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-dark me-2" type="button">
                                    ورود به حساب
                                    &nbsp;
                                    <i className="fa fa-user"/>

                                </button>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="#">
                                    <i className="fa fa-search"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
Footer.defaultProps = {
    background: "#FFFFFF"
}
export default Nav;