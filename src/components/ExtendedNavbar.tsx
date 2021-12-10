import React, { useState } from 'react';
import {
    NavbarExtendedContainer,
    NavbarLinkExtended,
    ExtendedResumeLinkContainer
} from '../styles/Navbar.style';
import slidePdf from '../assets/cv/henCVslide.pdf';
// import wordPdf from '../assets/cv/henCVdoc.pdf';

interface Props {
    isVisible?: boolean;
    setIsVisible: Function;
}

function ExtendedNavbar({ isVisible, setIsVisible }: Props) {
    const ExtendedResumeLink = (
        <a href={slidePdf} target="_blank">Resume</a>
    )

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        
            <NavbarExtendedContainer>
                <NavbarLinkExtended to="/about" onClick={handleClick}>About</NavbarLinkExtended>
                <NavbarLinkExtended to="/projects" onClick={handleClick}>Projects</NavbarLinkExtended>
                <NavbarLinkExtended to="/contact" onClick={handleClick}>Contact</NavbarLinkExtended>
                <ExtendedResumeLinkContainer>
                    {ExtendedResumeLink}
                </ExtendedResumeLinkContainer>
            </NavbarExtendedContainer>
        
    )
}

export default ExtendedNavbar;