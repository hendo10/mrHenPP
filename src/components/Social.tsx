import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png'

export default function Social() {
    const socialMedia = [
        {name: 'Github', url: 'https://github.com/hendo10', icon: githubIcon},
        {name: 'LinkedIn', url: 'https://www.linkedin.com/in/hchong10/', icon: linkedinIcon},
        {name: 'Twitter', url: 'https://twitter.com/hendo_84', icon: twitterIcon},
        {name: 'Instagram', url: 'https://www.instagram.com/mr__hen/', icon: instagramIcon}
    ]

    const renderSocial = () => {
        return (
            <View style={styles.socialIconContainer}>
                {socialMedia.map((element, index) => {
                    return (
                        <View 
                            style={{paddingRight: 33}}
                            key={index}>
                            <TouchableOpacity onPress={() => window.open(element.url, "_blank")}>
                                <Image
                                    style={{height: 30, width: 30, tintColor: 'black', opacity: 0.65}}
                                    source={{uri: element.icon}} 
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            {renderSocial()}
        </View>
    )
}

const styles = StyleSheet.create({
    socialIconContainer: {
        flexDirection: 'row',
        paddingTop: 15
    }
})