import React from "react";
import {Link , Outlet, useLocation} from "react-router-dom";

export function Home(){
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <button><Link to="about">About</Link></button>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>

            </nav>
        </div>
    );
}

export function About(){
    return (
        <div>
            <h1>[About]</h1>
            <nav>
                <button><Link to="../">Home</Link></button>
                <button><Link to="">about</Link></button>
                <button><Link to="services">Services</Link></button>
                <button><Link to="location">Location</Link></button>
                <button><Link to="history">History</Link></button>
            </nav>
            <Outlet />
        </div>
    );
}

export function Events(){
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}   

export function Services(){
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    );
}

export function CompanyHistory(){
    return (
        <div>
            <h2>Our Company History</h2>
        </div>
    );
}

export function Location(){
    return (
        <div>
            <h1>Our Location</h1>
        </div>
    );
}

export function Contact(){
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}


export function Whoops404(){
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>404 Error</h1>
            <h1>-Resourse not found at {location.pathname}!</h1>
        </div>
    );
}