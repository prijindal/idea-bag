import React, {Component} from 'react'
import {View, Text} from 'react-native'

const API_KEY = 'AIzaSyANekLQ8KfelzolnP38QKuq4_ybThoLD80'

async function getMatrixJson(url) {
  let response = await fetch(url);
  return await response.json()
}

class MatrixDistance extends Component {
  state = {
    distance: 0,
    loading: false,
    valid: false
  }

  componentWillReceiveProps(nextProps) {
    let {locations} = nextProps
    let {start, end} = locations
    if (!start.place_id || !end.place_id) {
      this.setState({
        loading: false,
        valid: false
      })
      return ;
    }
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metrics&origins=place_id:${start.place_id}&destinations=place_id:${end.place_id}&key=${API_KEY}`
    getMatrixJson(url)
    .then(res => {
      let {status, rows} = res
      if (status === "OK") {
        if (rows.length > 0) {
          let {elements} = rows[0]
          if (elements.length > 0) {
            let {distance} = elements[0]
            this.setState({
              loading: false,
              valid: true,
              distance: distance.text,
              error: null
            })
          } else {
            this.setState({
              error: 'Not found'
            })
          }
        } else {
          this.setState({
            error: 'Not found'
          })
        }
      } else {
        this.setState({
          error: state
        })
      }
    })
  }

  render() {
    let {loading, valid, distance, error} = this.state
    if (!valid) return <Text>Waiting..</Text>
    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>{error}</Text>
    return (
      <View>
        <Text>Road Distance: {distance}</Text>
      </View>
    )
  }
}

export default MatrixDistance
