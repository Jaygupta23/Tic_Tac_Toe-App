import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Box from "../components/Box"
export default App  = (props) => {


    
 return(
  <View style={styles.container}>
    <Box />
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
