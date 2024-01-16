import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TrackPlayer, { usePlayWhenReady, usePlaybackState,State } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../../musicPlayerService'
const ControlCenter = () => {

    const playBackState=usePlaybackState()
// Next button
    const skipToNext=async ()=>{
        await TrackPlayer.skipToNext()
    }
// Previous button
    const skipToPrevious=async ()=>{
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback=async(playback:State)=>{
        const currentTrack= await TrackPlayer.getActiveTrack()

        if(currentTrack != null){
            if(playback===State.Paused||playback===State.Ready){
                await TrackPlayer.play()
            }
            else{
               await TrackPlayer.pause()
            }
        }

    }


  return (
    <View style={styles.container}>

    <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name='skip-previous' size={48} />
    </Pressable>
    <Pressable onPress={()=>togglePlayback(playBackState)}>
        <Icon style={styles.icon} name={playBackState===State.Playing ? "pause" : "play-arrow" } size={48} />
    </Pressable>
    <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name='skip-next' size={48} />
    </Pressable>


    </View>
  )
}

const styles=StyleSheet.create({
    container: {
        marginBottom: 56,
    
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        color: '#FFFFFF',
      },
      playButton: {
        marginHorizontal: 24,
      }
})
export default ControlCenter