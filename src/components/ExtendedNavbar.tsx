import React, { useState } from 'react';
import {
    NavbarExtendedContainer,
    NavbarLinkExtended,
    ExtendedResumeLinkContainer
} from '../styles/Navbar.style';
import slidePdf from '../assets/cv/henCVslide.pdf';
// import wordPdf from '../assets/cv/henCVdoc.pdf';

function ExtendedNavbar() {
    const ExtendedResumeLink = (
        <a href={slidePdf} target="_blank">Resume</a>
    )

    return (
        
            <NavbarExtendedContainer>
                <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
                <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
                <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
                <ExtendedResumeLinkContainer>
                    {ExtendedResumeLink}
                </ExtendedResumeLinkContainer>
            </NavbarExtendedContainer>
        
    )
}

export default ExtendedNavbar;