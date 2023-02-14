import React from 'react'
import './Navigation.scss';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <div className='home-nav'>
                <Link to={"/"}>HOME</Link>
            </div>
            <div className='main-nav'>
                <Link to={"/man-collection"}>MAN</Link>
                <Link to={"/woman-collection"}>WOMAN</Link>
                <Link to={"/offers"} className='offers'>OFFERS</Link>
            </div>
            <div className='auth-nav'>
                <Link to={"/auth-login"}>Login</Link>
                <Link to={"/"}><img src='http://localhost:3000/shopping-bag-svgrepo-com.svg' alt='cart-img'/></Link>
            </div>
        </nav>
    )
}
