import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Contact() {
    const handleEmailLink = () => {
        window.location.href = `mailto:chong.henry@gmail.com`
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.bodyContainer]}>
                <Text style={styles.mainTitle}>
                    Get In Touch
                </Text>
                <Text style={[styles.mainText, {marginVertical: 25}]}>
                    Looking for new opportunities and open to networking, my inbox is always open.{'\n'}
                    Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </Text>
                <View>
                    
                </View>
                <View style={{width: '76%'}}>
                    
                    <TouchableOpacity
                        onPress={() => handleEmailLink()}
                        style={styles.sayHelloContainer}
                    >
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                            <Text style={styles.sayHelloText}>Say Hello</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop: 10, width: '76%'}}>
                    <TouchableOpacity
                        onPress={() => handleEmailLink()}
                    >
                        <Text style={[styles.sayHelloText, {fontSize: 16}]}>chong.henry@gmail.com</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25, 
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    mainTitle: {
        fontWeight: "800", 
        fontSize: 52, 
        width: '76%', 
        color: "#262626"
    },
    mainText: {
        fontSize: 19, 
        opacity: 0.65, 
        width: '76%',
        lineHeight: 30
    },
    bodyContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",  
        marginTop: 50, 
        marginBottom: 25,
    },
    sayHelloContainer: {
        borderColor: '#2C8DE7',
        borderWidth: 1.5, 
        borderRadius: 10,
        width: 125
    },
    sayHelloText: {
        fontSize: 19,
        color: '#2C8DE7'
    }
  });