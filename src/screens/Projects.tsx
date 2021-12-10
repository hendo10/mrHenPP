import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import githubIcon from '../assets/github.png';
import externalLinkIcon from '../assets/externalLink.png';
import lazytravelPic from '../assets/lazytraveler.png';
import ExtendedNavbar from '../components/ExtendedNavbar';

interface Props {
    isVisible?: boolean;
    setIsVisible: Function;
}

export default function Projects({ isVisible, setIsVisible }: Props) {
    const [isHoover, setIsHoover] = useState<boolean>(false);

    const projects = [
        {
            name: 'Exploring the Blockchain', 
            description: 'A stat tracker on contracts deployed on the ethereum blockchain. A useful tool on staying up to date with developers deploying smart contracts onto the blockchain', 
            techStack: ['tbd'], 
            githubUrl: 'https://github.com/wii-fitness/lazy-traveler', 
            url: 'https://lazy-traveler.herokuapp.com/', 
            image: lazytravelPic,
            isUrl: false,
            isCurrent: true
        },
        {
            name: 'Spotify Connect', 
            description: '[update].', 
            techStack: ['React', 'Redux', 'Express', 'PostgresSQL', 'Node.js'], 
            githubUrl: 'https://github.com/hendo10/ttprep-dashboard', 
            url: '', 
            image: lazytravelPic,
            isUrl: false,
            isCurrent: false
        },
        {
            name: 'The Lazy Traveler', 
            description: 'An automated trip planner that generates an itinerary with dates and times for a traveler. The automated itinerary is based on user inputs such as location to where they are traveling to, duration of the trip and any specific areas of interest.', 
            techStack: ['React', 'Redux', 'Express', 'PostgresSQL', 'Google APIs', 'Node.js', 'Heroku'], 
            githubUrl: 'https://github.com/wii-fitness/lazy-traveler', 
            url: 'https://lazy-traveler.herokuapp.com/', 
            image: lazytravelPic,
            isUrl: true,
            isCurrent: false
        },
        {
            name: 'TestTakers', 
            description: 'A web dashboard for highschool students enrolled in TestTakers, a company providing SAT/ACT score improvement services. This demo was created to provide students a detailed view of exam scores and areas of improvements.', 
            techStack: ['React', 'Redux', 'Express', 'PostgresSQL', 'Node.js'], 
            githubUrl: 'https://github.com/hendo10/ttprep-dashboard', 
            url: '', 
            image: lazytravelPic,
            isUrl: false,
            isCurrent: false
        }
    ];

    const projectFeedItem = (name: string, description: string, stack: Array<string>, gitUrl: string, url: string, image: string, index: number, isUrl: boolean, isCurrent: boolean) => {
        return (
            <View 
                key={index}
                style={styles.feedItemContainer}>
                <View style={[styles.detailsContainer, {zIndex: 3}]}>
                    {isCurrent && <View><Text style={{fontSize: 16}}>In Progress</Text></View>}
                    <View style={{paddingVertical: 15}}>
                        <Text style={styles.feedItemTitle}>{name}</Text>
                    </View> 
                    
                    <View style={{borderRadius: 5, backgroundColor: 'rgb(189, 189, 189)', zIndex: 3, width: '100%'}}>
                        <Text style={styles.feedItemDescriptionText}>{description}</Text>
                    </View>
                    
                    <View> 
                        <View style={{flexDirection: 'row', paddingVertical: 15}}>
                            {stack.map((element, index) => {
                                return (
                                    <View 
                                        style={{paddingRight: 10}}
                                        key={index}>
                                        <Text>{element}</Text>
                                    </View>
                                )
                            })} 
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                style={{justifyContent: 'center'}}
                                onPress={() => window.open(gitUrl, "_blank")}
                            >
                                <Image 
                                    style={{height: 25, width: 25, tintColor: 'black', opacity: 0.65}}
                                    source={{uri: githubIcon}}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                            <View style={{width: 15}}/>
                            {isUrl && <TouchableOpacity
                                style={{justifyContent: 'center'}}
                                onPress={() => window.open(url, "_blank")}
                            >
                                <Image 
                                    style={{height: 30, width: 30, tintColor: 'black', opacity: 0.65}}
                                    source={{uri: externalLinkIcon}}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>}
                        </View>
                    </View>
                </View>
                <View style={[styles.imageContainer, {zIndex: 1}]}>
                    <Image 
                        source={{uri: image}}
                        resizeMode={'contain'}
                        style={{flex: 1, width: '100%', opacity: 0.75, borderRadius: 5, borderColor: 'red', borderWidth: 1 }}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: isVisible ? 'rgba(0,0,0,0.5)' : 'white' }]}>
            { isVisible && <ExtendedNavbar isVisible={isVisible} setIsVisible={setIsVisible}/> }
            <View style={[styles.bodyContainer]}>
                <View style={{width: '76%'}}>
                    <Text style={styles.mainTitle}>
                        Some projects I've built
                    </Text>
                </View>
                <View style={{width: '76%', marginTop: 25, }}>
                {projects.map((element, index) => {
                    return (
                        projectFeedItem(element.name, element.description, element.techStack, element.githubUrl, element.url, element.image, index, element.isUrl, element.isCurrent)
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
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    mainTitle: {
        fontWeight: "800", 
        fontSize: 52,  
        color: "#262626",
    },
    feedItemDescriptionText: {
        fontSize: 16, 
        opacity: 0.65, 
        lineHeight: 22,
        padding: 15
    },
    bodyContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",  
        marginTop: 50, 
        paddingVertical: 25, 
    },
    feedItemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
    },
    feedItemTitle: {
        // fontWeight: "800", 
        fontSize: 30,  
        color: "#2C8DE7",
        opacity: .9
    },
    imageContainer: {
        flex: 1,
        borderRadius: 5,
        width: '90%'
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center'
    }
  });