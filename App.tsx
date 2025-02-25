import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RootStack from './src/Navigation/StackNavigation'
import { Provider } from 'react-redux'
import store from './src/Action/store'

const App = () => {
  return (
    <Provider store={store}>
      <RootStack/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})