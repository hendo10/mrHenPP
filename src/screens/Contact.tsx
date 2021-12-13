import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ExtendedNavbar from '../components/ExtendedNavbar';
import { 
    MainContainer, 
    BodyContainer,
    StyledTitle,
    StyledText,
} from '../styles/Page.style';

interface Props {
    isVisible?: boolean;
    setIsVisible: Function;
}

export default function Contact({ isVisible, setIsVisible }: Props) {
    const handleEmailLink = () => {
        window.location.href = `mailto:chong.henry@gmail.com`
    }

    const EmailLink = (
        <a className="email-button" href='#' target="_blank">Say Hello</a>
    )

    return (
        <MainContainer isVisible={isVisible}>
            { isVisible && <ExtendedNavbar isVisible={isVisible} setIsVisible={setIsVisible}/> }
            <BodyContainer>
                <StyledTitle>Get In Touch</StyledTitle>
                <StyledText>Looking for new opportunities and networking, my inbox is always open. <br/>Whether you have a question or just want to say hi, I'll try my best to get back to you!</StyledText>
        
                <TouchableOpacity
                        onPress={() => handleEmailLink()}
                        style={styles.sayHelloContainer}
                    >
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                            <Text style={styles.sayHelloText}>Say Hello</Text>
                        </View>
                </TouchableOpacity> 
                <TouchableOpacity
                    onPress={() => handleEmailLink()}
                >
                    <Text style={[styles.sayHelloText, {fontSize: 16, marginTop: '20px'}]}>chong.henry@gmail.com</Text>
                </TouchableOpacity>
            </BodyContainer>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    sayHelloContainer: {
        borderColor: '#2C8DE7',
        borderWidth: 1.5, 
        borderRadius: 10,
        width: 125
    },
    sayHelloText: {
        fontSize: 19,
        color: '#2C8DE7',
    }
  });