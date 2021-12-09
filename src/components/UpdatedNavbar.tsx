import React, { useState } from 'react';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    OpenLinksButton,
    NavbarLinkExtended,
    HomeIcon,
    ResumeLinkContainer,
    ExtendedResumeLinkContainer
} from '../styles/Navbar.style';
import { AiFillHome } from "react-icons/ai";
import slidePdf from '../assets/cv/henCVslide.pdf';
// import wordPdf from '../assets/cv/henCVdoc.pdf';

function UpdatedNavbar() {
    const [extendNavbar, setExtendNavbar] = useState<boolean>(false);

    const ResumeLink = (
        <a className="resume-button" href={slidePdf} target="_blank">Resume</a>
    );

    const ExtendedResumeLink = (
        <a href={slidePdf} target="_blank">Resume</a>
    )

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <HomeIcon to="/">
                            <AiFillHome size={32} color={"black"}/>
                        </HomeIcon>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/about">About</NavbarLink>
                        <NavbarLink to="/projects">Projects</NavbarLink>
                        <NavbarLink to="/contact">Contact</NavbarLink>
                        <ResumeLinkContainer>
                            {ResumeLink}
                        </ResumeLinkContainer>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr)
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
                    <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
                    <ExtendedResumeLinkContainer>
                        {ExtendedResumeLink}
                    </ExtendedResumeLinkContainer>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default UpdatedNavbar;