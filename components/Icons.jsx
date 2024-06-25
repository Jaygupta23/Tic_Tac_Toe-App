import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default Icons = ({name}) => {
    // console.log(name)

    switch(name){
        case 'circle':
            return <Icon name="circle-thin" size={38} color="green" />
            break;
        case 'cross':
            return <Icon name="times" size={38} color="red" />
            break;
      
        default:
          return <Icon name="pencil" size={38} color="#ccc"  />
    }
  
}

