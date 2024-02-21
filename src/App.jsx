import { View, Text } from 'react-native'
import React from 'react'
import Icons from './components/Icons'
import Icon from 'react-native-vector-icons/FontAwesome'
import TicTacToe from './screen/TicTacToe'
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TicTacToe />
    </View>
  )
}

export default App