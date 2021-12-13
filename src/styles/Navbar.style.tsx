import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyleProps {
    extendNavbar?: boolean;
}

export const NavbarContainer = styled.nav<StyleProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 999;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
    padding-left: 11%;
    margin-left: -10px;
    background-color: white;
    justify-content: flex-start;
`;

export const RightContainer = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
    padding-right: 11%;
    background-color: white;
    justify-content: flex-end;
    
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 700px) {
        padding-left: 10px;
    }
`;

export const NavbarLink = styled(Link)`
    color: black;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: black;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    text-decoration: none;
    margin: 10px;
    padding-right: 11%;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 30px;
    cursor: pointer;
    margin-right: -10px;

    @media (min-width: 701px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: center;
    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 999;
    right: 0;
    padding-bottom: 10px;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const HomeIcon = styled(Link)`
    display: flex;

    @media (min-width: 701px) {
        display: none;
    }
`;

export const ResumeLinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: dashed;
    border-width: 1.5px;
    border-color: #2C8DE7; 

    .resume-button {
        padding: 0 22px 0 22px;
        font-size: 18px;
        height: auto;
        text-decoration: none;
    }

    a {
        color: #2C8DE7;
    }

    a:visited {
        color: #2C8DE7;
    }

    a:hover, a:active, a:focus {
        color: #2C8DE7;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const ExtendedResumeLinkContainer = styled.div`
    display: flex;
    font-size: 18px;
    justify-content: center;
    margin: 10px;
    padding-right: 11%;

    a {
        color: #2C8DE7;
        text-decoration: none;
    }

    a:visited {
        color: #2C8DE7;
        text-decoration: none;
    }

    a:hover, a:active, a:focus {
        color: #2C8DE7;
        text-decoration: none;
    }

    @media (min-width: 700px) {
        display: none;
    }
`;