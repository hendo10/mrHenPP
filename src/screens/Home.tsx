import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Social from '../components/Social';
import ExtendedNavbar from '../components/ExtendedNavbar';

interface Props {
    isVisible?: boolean;
}

export default function Home({ isVisible }: Props) {
    return (
        <View style={[styles.container]}>
            { isVisible && <ExtendedNavbar /> }
            <View style={[styles.bodyContainer]}>
                <View style={{width: '76%'}}>
                    <Text style={styles.mainText}>Hi, my name is</Text>
                    <Text style={[styles.mainTitle, {paddingVertical: 15}]}>Henry Chong.</Text>
                    <Text style={styles.secondaryTitle}>
                        I am passionate about creative solutions and {'\n'}the role technology plays in our lives.
                    </Text>
                    <Text style={[styles.mainText, {marginVertical: 15}]}>
                        I'm a software engineer with a background in finance. {'\n'}
                        Engaged in problem solving and building out solutions, {'\n'}I enjoy creating clean user interfaces and front end implementation of applications.
                    </Text>
                </View>
                <View style={styles.profileContainer}>
                    {/* profile picture to be placed here */}
                </View>
                <View style={{width: '76%'}}>
                    <Social />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    bodyContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",  
        marginTop: 50, 
        paddingVertical: 25,
    },
    profileContainer: {
        flex: 1, 
        // minWidth: 320
    },
    mainTitle: {
        fontWeight: "800", 
        fontSize: 52,
        color: "#262626"
    },
    secondaryTitle: {
        fontWeight: "600", 
        fontSize: 33, 
        color: "#262626",
        opacity: 0.65
    },
    mainText: {
        fontSize: 19, 
        opacity: 0.65, 
        lineHeight: 30,
    },

});