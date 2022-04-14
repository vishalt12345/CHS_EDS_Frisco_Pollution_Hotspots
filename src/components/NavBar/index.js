import React from 'react';
import netlifyIdentity from 'netlify-identity-widget'

import {Nav, NavLink, Bars, NavMenu, LogInBtn, Profile, ProfileImg} from "./NavBarElements";
import profile from './profile.png'

export default function NavBar({user}) {
    const handleSignIn = () => {
        netlifyIdentity.open();
    }

    return (<Nav>
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
                <Profile>
                    <ProfileImg src={profile} />
                </Profile>
                :
                <LogInBtn onClick={handleSignIn}>
                    Sign In
                </LogInBtn>
            }
        </Nav>)
}
