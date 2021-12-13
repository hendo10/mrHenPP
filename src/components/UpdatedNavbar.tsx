import React from 'react';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    OpenLinksButton,
    HomeIcon,
    ResumeLinkContainer,
} from '../styles/Navbar.style';
import { AiFillHome } from "react-icons/ai";
import slidePdf from '../assets/cv/henCVslide.pdf';
// import wordPdf from '../assets/cv/henCVdoc.pdf';

interface Props {
    isVisible: boolean;
    setIsVisible: Function;
}

function UpdatedNavbar({ isVisible, setIsVisible }: Props) {
    const ResumeLink = (
        <a className="resume-button" href={slidePdf} target="_blank">Resume</a>
    );

    const handleClick = () => {
        setIsVisible(false);
    }

    return (
        <NavbarContainer extendNavbar={isVisible}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <HomeIcon to="/" onClick={handleClick}>
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
                                setIsVisible(!isVisible)
                            }}
                        >
                            {isVisible ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
    )
}

export default UpdatedNavbar;