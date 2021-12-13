import React from 'react';
import {StyleSheet} from 'react-native';
import Social from '../components/Social';
import ExtendedNavbar from '../components/ExtendedNavbar';
import { 
    MainContainer, 
    BodyContainer,
    StyledTitle,
    StyledSecondaryTitle,
    StyledText
} from '../styles/Page.style';

import useWindowDimensions from '../components/utils';

interface Props {
    isVisible?: boolean;
    setIsVisible: Function;
}

export default function Home({ isVisible, setIsVisible }: Props) {
    const { height, width } = useWindowDimensions();

    const mobileView = () => {
        return (
            <>
                <StyledSecondaryTitle>I am passionate about creative solutions and the role technology plays in our lives.</StyledSecondaryTitle>
                <StyledText>
                I'm a software engineer with a background in finance.
                Engaged in problem solving and building out solutions, I enjoy creating clean user interfaces and front end implementation of applications.
                </StyledText>
            </>
        )
    }

    const desktopView = () => {
        return (
            <>
                <StyledSecondaryTitle>I am passionate about creative solutions <br/> and the role technology plays in our lives.</StyledSecondaryTitle>
                <StyledText>
                I'm a software engineer with a background in finance. <br/>
                Engaged in problem solving and building out solutions, <br/>I enjoy creating clean user interfaces and front end implementation of applications.
                </StyledText>
            </>
        )
    }

    return (
        <MainContainer isVisible={isVisible}>
            { isVisible && <ExtendedNavbar isVisible={isVisible} setIsVisible={setIsVisible}/> }
            <BodyContainer>
                <StyledText>Hi, my name is</StyledText>
                <StyledTitle>Henry Chong.</StyledTitle>
                {width >= 800 ? desktopView() : mobileView()}
                <Social />
            </BodyContainer>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1, 
        // minWidth: 320
    },
});