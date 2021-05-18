//system
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TopMenu = () => {
    const author = useSelector((state) => state.profile.author);
    return (
        <>
            <Link to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link to="/profile">Profile</Link>
            &nbsp;|&nbsp;
            <p>{author}</p>
        </>
    )
}