import React, {Component} from 'react'
import {View} from 'react-native'
import { Provider } from 'react-redux'
import LocationSearch from './components/LocationSearch'
import CalculatedDistance from './components/CalculatedDistance'
import MatrixDistance from './components/MatrixDistance'

import store from './store'

const styles = {
  view: {
    flex: 1
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.view}>
          <LocationSearch dispatchKey="start"/>
          <LocationSearch dispatchKey="end"/>
          <CalculatedDistance/>
          <MatrixDistance />
        </View>
      </Provider>
    )
  }
}

export default App
