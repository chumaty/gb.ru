import React from "react";
import { Link } from "react-router-dom";

export const TopMenu = () => {
    return (
        <>
            <Link to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link to="/profile">Profile</Link>
        </>
    )
}