import React from 'react';
import styled from 'styled-components';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import githubIcon from '../assets/github.png';

export default function Projects() {
    const projects = [
        {name: 'The Lazy Traveler', description: 'An automated trip planner that generates an itinerary with dates and times for a traveler. The automated itinerary is based on user inputs (such as location to where they are traveling to, duration of the trip and any specific areas of interest.', techStack: ['React', 'Redux', 'Express', 'PostgresSQL', 'Google APIs', 'Node.js'], githubUrl: 'https://github.com/wii-fitness/lazy-traveler', url: 'https://github.com/hendo10/mrHenPP'},
        {name: 'Test Title1', description: 'Testing some text1', techStack: ['React', 'Redux', 'Express', 'PostgresSQL', 'Google APIs', 'Node.js'], githubUrl: 'https://github.com/hendo10/mrHenPP', url: 'https://github.com/hendo10/mrHenPP'},
        {name: 'Test Title2', description: 'Testing some text2', techStack: ['Javascript', 'Node.js', 'Express'], githubUrl: 'https://github.com/hendo10/mrHenPP', url: 'https://github.com/hendo10/mrHenPP'}
    ];

    const projectFeedItem = (name: string, description: string, stack: Array<string>, gitUrl: string, url: string) => {
        return (
            <View style={styles.feedItemContainer}>
                <View style={styles.imageContainer}>

                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.mainText}>{name}</Text>
                    <Text style={styles.mainText}>{description}</Text>
                    <View style={{flexDirection: 'row'}}>
                        {stack.map((element, index) => {
                            return(
                                <View 
                                    style={{paddingRight: 10}}
                                    key={index}>
                                    <Text>{element}</Text>
                                </View>
                            )
                        })} 
                    </View>
                    <TouchableOpacity
                        onPress={() => window.open(gitUrl, "_blank")}
                    >
                        <Image 
                            style={{height: 30, width: 30, tintColor: 'black', opacity: 0.65}}
                            source={{uri: githubIcon}}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.bodyContainer]}>
                <View style={{width: '76%'}}>
                    <Text style={styles.mainTitle}>
                        Some projects I've built
                    </Text>
                </View>
                <View style={{width: '76%', borderColor: 'green', borderWidth: 1, height: '1000px'}}>
                {projects.map((element, index) => {
                    return (
                        projectFeedItem(element.name, element.description, element.techStack, element.githubUrl, element.url)
                    )    
                })}
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
        marginBottom: 25,
    },
    feedItemContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
    },
    detailsContainer: {
        flex: 1,
        borderColor: 'blue',
        borderWidth: 1,
    }
  });