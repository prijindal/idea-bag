import React, {Component} from 'react'
import {Text} from 'react-native'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'

const API_KEY = 'AIzaSyANekLQ8KfelzolnP38QKuq4_ybThoLD80'

class LocationSearch extends Component {
  _renderDescription(row) {
    return (
      <Text>{row.description}</Text>
    )
  }

  onPress = (data, details) => {
    let {location} = details.geometry
    let {setStart} = this.props
    if (!setStart) return ;
    setStart(location)
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        renderDescription={this._renderDescription} // display street only
        onPress={this.onPress}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: API_KEY,
          language: 'en', // language of the results
          types: '(cities)', // default: 'geocode'
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}

        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}


        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      />
    )
  }
}

export default LocationSearch
