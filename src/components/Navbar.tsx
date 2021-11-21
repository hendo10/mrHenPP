import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigateToPath = useNavigate();

    return (
        <View style={styles.container}>
            <View style={{width: '76%', flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, alignItems:'flex-start'}}>
                <TouchableOpacity 
                    onPress={() => navigateToPath('/')}
                    style={{paddingRight: 15}}
                >
                    <Text style={styles.mainText}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
                <TouchableOpacity 
                    onPress={() => navigateToPath('/about')}
                    style={{paddingRight: 15}}
                >
                    <Text style={styles.mainText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigateToPath('/projects')}
                    style={{paddingRight: 15}}
                >
                    <Text style={styles.mainText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigateToPath('/contact')}
                    style={{paddingRight: 15}}
                >
                    <Text style={styles.mainText}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.resumeLinkContainer}
                >
                    <View style={{paddingVertical: 10, paddingHorizontal: 22}}>
                        <Text style={styles.resumeText}>Resume</Text>
                    </View>  
                </TouchableOpacity>
            </View>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    mainText: {
        fontSize: 16,
        opacity: 0.65
    },
    resumeText: {
        fontSize: 16,
        opacity: 0.65
    },
    resumeLinkContainer: {
        borderColor: '#2C8DE7', 
        borderWidth: 1.5, 
        borderStyle: 'dashed', 
        borderRadius: 10,
    }
})