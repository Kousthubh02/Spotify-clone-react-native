import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import { setupPlayer,addTrack } from '../musicPlayerService'

const App = () => {
  
  const [isPlayerReady,setIsPlayerReady]=useState(false)

  async function setup(){
    let isSetup=await setupPlayer()


    if(isSetup){
      await addTrack()
    }
    setIsPlayerReady(isSetup)
  }


  useEffect(()=>{
    setup()
  },[])
  
if(!isPlayerReady){
  return  <ActivityIndicator/>
  
}

  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}


const styles=StyleSheet.create(
  {
    container:{
      flex:1
    }
  }
)
export default App