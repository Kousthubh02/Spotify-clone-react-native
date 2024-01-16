import { View, Text,Dimensions, StyleSheet, Image ,FlatList } from 'react-native'
import React, { useState } from 'react'
import SongInfo from './../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';
import TrackPlayer, { Track, useTrackPlayerEvents } from 'react-native-track-player';
import { playListData } from './../constants';
import SongSlider from './../components/SongSlider';




const {width}=Dimensions.get('window')

const MusicPlayer = () => {

const [track,setTrack]=useState<Track|null>()

useTrackPlayerEvents([Event.PlaybackTrackChanged],async event=>{
    switch (event.type) {
        case Event.PlaybackTrackChanged:
            await TrackPlayer.getTrack(event.nextTrack)
            setTrack(playingTrack)            
            break;
    
        default:
            break;
    }
})

//   return (
//     <View style={styles.listArtWrapper}>
//       <View style={styles.listArtWrapper}>
//         {track?.artwork && (

//             <Image 
//             style={styles.albumArtTag}
//              source={{uri:track?.artwork.toString()}}
//              />

            
//         )
//            }
//       </View>
//     </View>
//   )
// }
  return (
    <View>
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtwork}
        keyExtractor={song=>song.id.toString()}

        />
        <SongInfo track={track}/>
        <SongSlider/>
        
    </View>
  )
}

const styles=StyleSheet.create({

})

export default MusicPlayer