//system
import React from "react";
import { TopMenu } from "./TopMenu"
import { useSelector, useDispatcher} from "react-redux";
//custom
// import { changeAuthor } from "../store/profile/actions";

export const Profile = () => {
    const author = useSelector((state) => state.profile.author)
    return (
        <>
            <TopMenu />
        </>
    )
}