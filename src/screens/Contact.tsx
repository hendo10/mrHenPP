import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Contact() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.mainTextContainer]}>
                {/* <Text style={[styles.mainText, {marginVertical: 25}]}></Text> */}
                <Text style={styles.mainTitle}>
                    Get In Touch
                </Text>
                <Text style={[styles.mainText, {marginVertical: 25}]}>
                    Looking for new opportunities and open to networking, my inbox is always open.{'\n'}
                    Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </Text>
                <Text style={[styles.mainText]}>
                    
                </Text>
                <View>
                    <TouchableOpacity>

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
    mainTextContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",  
        marginTop: 50, 
        marginBottom: 25,
        paddingLeft: 50,
    }
  });