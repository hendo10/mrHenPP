import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Social from '../components/Social';

export default function Home() {
    return (
        <View style={[styles.mainSection]}>
            
            <View style={[styles.mainTextContainer]}>
                <Text style={[styles.mainText, {marginVertical: 25}]}>Hi, my name is</Text>
                <Text style={styles.mainTitle}>
                    Henry Chong.
                </Text>
                <Text style={styles.secondaryTitle}>
                    I am passionate about creative solutions and {'\n'}the role technology plays in our lives.
                </Text>
                <Text style={[styles.mainText, {marginVertical: 25}]}>
                    I'm a software engineer with a background in finance. {'\n'}
                    Engaged in problem solving and building out solutions, {'\n'}I enjoy creating clean user interfaces and front end implementation of applications.
                </Text>
            </View>
            <View style={styles.profileContainer}>
                {/* profile picture to be placed here */}
            </View>
            <View style={{}}>
                <Social />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
//   footer: {
//       width: "100%", 
//       backgroundColor: "#151515", 
//       flexDirection: "column", 
//       paddingVertical: 50, 
//       flexWrap: "wrap"
//   },
//   footerLinksContainer: {
//       width: "100%", 
//       flexDirection: "row", 
//       marginTop: 40, 
//       flexWrap: "wrap"
//   },
    profileContainer: {
        flex: 1, 
        minWidth: 320
    },
    mainSection: {
        flex: 1,
        paddingVertical: 25, 
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    mainTitle: {
        fontWeight: "800", 
        fontSize: 52, 
        width: '76%', 
        color: "#262626"
    },
    secondaryTitle: {
        fontWeight: "600", 
        fontSize: 33, 
        width: '76%', 
        color: "#262626",
        opacity: 0.65
    },
    mainText: {
        fontSize: 19, 
        opacity: 0.65, 
        width: '76%',
        lineHeight: 30,
    },
    mainTextContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",  
        marginTop: 50, 
        marginBottom: 25,
    }
});