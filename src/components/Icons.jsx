import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
const Icons = ({name}) =>{
  console.log(name)
  return (
    <Icon name={name} size = {38} color = '#F7CD2E' />
  )
}

export default Icons