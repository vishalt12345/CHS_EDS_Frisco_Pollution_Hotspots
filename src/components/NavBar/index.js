import React from 'react';
import netlifyIdentity from 'netlify-identity-widget'

import {Nav, NavLink, Bars, NavMenu, NavBtn} from "./NavBarElements";

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
            {user ? <NavBtn >
                    Logged In
                </NavBtn> :
                <NavBtn onClick={handleSignIn}>
                    Sign In
                </NavBtn>
            }
        </Nav>)
}
