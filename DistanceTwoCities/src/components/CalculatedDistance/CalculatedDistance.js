import React, {Component} from 'react'
import {View, Text} from 'react-native'
import distanceBetweenTwoPoints from '../../helpers/distanceBetweenTwoPoints'

class CalculatedDistance extends Component {
  render() {
    let {locations} = this.props
    let {start, end} = locations
    if (!start.lat || !start.lng || !end.lat || !end.lng) {
      return <Text>Not Available</Text>
    }
    return (
      <View>
        <Text>Geo Distance: {distanceBetweenTwoPoints(start, end)} Km</Text>
      </View>
    )
  }
}

export default CalculatedDistance
