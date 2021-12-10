import React from 'react';
import styled from 'styled-components';
import {View, StyleSheet, Text} from 'react-native';
import ExtendedNavbar from '../components/ExtendedNavbar';

interface Props {
    isVisible?: boolean;
}

export default function About({ isVisible }: Props) {
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
        <View style={[styles.container]}>
            { isVisible && <ExtendedNavbar /> }
            <View style={[styles.bodyContainer]}>
                <View style={{width: '76%'}}>
                    <Text style={styles.mainTitle}>
                        About me
                    </Text>
                </View>
                <View style={{width: '76%'}}>
                    <Text style={[styles.mainText, {marginTop: 25}]}>
                        Hello! My name is Henry. My interest in web development started back in 2017 when I was randomly introduced to blockchain and cryptocurrencies from a coworker. I found myself reading whitepapers on various projects in the blockchain space, participating on Discord discussions and even dabbling around in the technology through trading of these digital assets. I decided in 2019 to leave my job in finance (10+yrs) and enroll in a 12-week web development bootcamp to become a Software Engineer. I wanted to give myself the tools to understand how technology works underneath the surface and solve complex problems.      
                    </Text>
                </View>
                <View style={{width: '76%'}}>
                    <Text style={[styles.mainText, {marginTop: 25}]}>
                        Fast forward to today, I am working as a software engineer at <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => window.open('https://www.emporia.app/', "_blank")}>Emporia</Text>, a start-up focused on making content creation and online learning more accessible through community principles. This past year I have seen myself grow from creating financial models on Excel to now working with various technologies and building on a web and mobile application. When I'm not working, you can find me in search of good eats with my girlfriend or catching up with friends over a basketball or football game.        
                    </Text>
                </View>
                <View style={{width: '76%'}}>
                    <Text style={[styles.mainText, {marginTop: 25}]}>
                        Here are some of the technologies I've been working with recently:     
                    </Text>
                </View>
                <View style={{width: '76%'}}>
                    <StyledText>
                        <ul className="skills-list">
                            {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </StyledText>
                </View>
            </View>
        </View>
    )
}

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    overflow: visible;
    list-style: none;
    word-wrap: bread-word;
    word-break: break-all;
    
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        line-height: 20px;
      }
    }
  }
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    mainTitle: {
        fontWeight: "800", 
        fontSize: 52,  
        color: "#262626",
    },
    mainText: {
        fontSize: 19, 
        opacity: 0.65, 
        lineHeight: 30,
    },
    bodyContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",  
        marginTop: 50, 
        paddingVertical: 25, 
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