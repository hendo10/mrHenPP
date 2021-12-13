import React from 'react';
import styled from 'styled-components';
import {View, StyleSheet, Text} from 'react-native';
import ExtendedNavbar from '../components/ExtendedNavbar';
import { 
    MainContainer, 
    BodyContainer,
    StyledTitle,
    StyledText,
    StyledTextList
} from '../styles/Page.style';

interface Props {
    isVisible?: boolean;
    setIsVisible: Function;
}

export default function About({ isVisible, setIsVisible }: Props) {
    const skills = [
        'JavaScript (ES6+)',
        'React, React-Native',
        'Node.js',
        'TypeScript',
        'Redux',
        'CSS & HTML',
        'Solidity'
    ];

    return (
        <MainContainer isVisible={isVisible}>
            { isVisible && <ExtendedNavbar isVisible={isVisible} setIsVisible={setIsVisible}/> }
            <BodyContainer>
                <StyledTitle>About me</StyledTitle>
                <StyledText>
                    Hello! My name is Henry. My interest in web development started back in 2017 when I was randomly introduced to blockchain and cryptocurrencies from a coworker. I found myself reading whitepapers on various projects in the blockchain space, participating on Discord discussions and even dabbling around in the technology through trading of these digital assets. I decided in 2019 to leave my job in finance (10+yrs) and enroll in a 12-week web development bootcamp to become a Software Engineer. I wanted to give myself the tools to understand how technology works underneath the surface and solve complex problems.
                </StyledText>
                <Text style={[styles.mainText, {marginBottom: '20px'}]}>
                    Fast forward to today, I am working as a software engineer at <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => window.open('https://www.emporia.app/', "_blank")}>Emporia</Text>, a start-up focused on making content creation and online learning more accessible through community principles. This past year I have seen myself grow from creating financial models on Excel to now working with various technologies and building on a web and mobile application. When I'm not working, you can find me in search of good eats with my girlfriend or catching up with friends over a basketball or football game.        
                </Text>
                <StyledTextList>
                    <ul className="skills-list">
                        {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}
                    </ul>
                </StyledTextList>
            </BodyContainer>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    mainText: {
        color: "#262626",
        fontSize: 19, 
        opacity: 0.65, 
        lineHeight: 30,
    },
    sayHelloContainer: {
        borderColor: '#2C8DE7',
        borderWidth: 1.5, 
        borderRadius: 10
    },
    sayHelloText: {
        fontSize: 19,
        color: '#2C8DE7'
    }
  });