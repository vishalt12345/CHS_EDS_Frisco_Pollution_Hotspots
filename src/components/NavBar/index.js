import React, {useRef, useState} from 'react';
import netlifyIdentity from 'netlify-identity-widget'
import {Nav, NavLink, Bars, NavMenu, LogInBtn, Profile, ProfileImg, UserMenu} from "./NavBarElements";
import {ClickOutside} from "../../lib/ClickOutside";

import profile from './profile.png'

export default function NavBar({user}) {
    const [menuState, setMenuState] = useState(false);

    const menu = useRef(null);
    const profileBtn = useRef(null);
    ClickOutside(menu, () => setMenuState(false), [profileBtn])

    const handleSignIn = () => {
        netlifyIdentity.open();
    }

    const getProfilePic = () => {
        if(user && user.avatar_url) {
            return user.avatar_url;
        }
        return profile;
    }

    return (
        <Nav>
            <NavLink to={'/'} style={{justifySelf: "start"}}>
                <h1>Frisco Pollution Hotspots</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to={'/mission'} activestyle={''}>
                    Mission
                </NavLink>
                <NavLink to={'/opportunities'} activestyle={''}>
                    Opportunities
                </NavLink>
                <NavLink to={'/contact'} activestyle={''}>
                    Contact
                </NavLink>
            </NavMenu>
            {user ?
                <Profile onClick={() => setMenuState(!menuState)} ref={profileBtn}>
                    <ProfileImg src={getProfilePic()} />
                </Profile>
                :
                <LogInBtn onClick={handleSignIn}>
                    Sign In
                </LogInBtn>
            }
            <UserMenu ref={menuState ? menu : null} style={{display: menuState ? "block" : "none", visibility: menuState ? "visible" : "hidden"}}/>
        </Nav>
    )
}
