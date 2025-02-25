import React, { useState, useCallback, useRef } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const YouTubeView = ({ navigation, route }: any) => {

    const playerRef = useRef(null);

    console.log('----',route);
    

    return (
        <View style={{
            flex: 1,
            paddingTop: 20,
            backgroundColor: '#f8f5ff',
        }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.headerText}>Video</Text>
                <View style={{ width: 40 }}></View>
            </View>

            <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}>{route?.params?.data?.title}</Text>
            <View style={{ alignItems: 'center', marginTop: 20}}>
                <YoutubePlayer
                    ref={playerRef}
                    height={230}
                    width={'98%'}
                    // play={true}
                    webViewStyle={{ backgroundColor: 'white' }}
                    // style
                    videoId={route?.params?.videoID} // Replace with your YouTube video ID
                // onChangeState={onStateChange}
                />
            </View>
            <ScrollView style={{ paddingHorizontal: 10 }}>
                <Text style={{ color: 'black', fontSize: 18, marginTop: 20 }}>Description : </Text>
                <Text style={{ color: 'black', fontSize: 16, textAlign: 'justify', marginTop: 20 }}>
                    {route?.params?.data?.description}
                </Text>
            </ScrollView>
            {/* <Button title={playing ? "Pause" : "Play"} onPress={() => setPlaying((prev) => !prev)} /> */}
        </View>
    );
};

export default YouTubeView;

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 5
        // paddingVertical: 10,
    },
    backButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
    backIcon: {
        height: 20,
        width: 20,
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
    },

})
