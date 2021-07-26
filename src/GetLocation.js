import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import MapboxGL from '@react-native-mapbox-gl/maps';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

const ACCESS_TOKEN =
  'pk.eyJ1IjoiZHBhaW4iLCJhIjoiY2tyYTkycGZqMHFhaDMwcXhvNXAwdDZ6cCJ9.I5bnigDLERvbSD1GxqCD7Q';
MapboxGL.setAccessToken(ACCESS_TOKEN);

export default class GetLoction extends React.Component {
  state = {
    long: -122.0840012,
    lat: 37.4219806,
    currentLocation: 'none',
  };

  coorstoLocation = () => {
    console.log(this.state);
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.long},${this.state.lat}.json?access_token=${ACCESS_TOKEN}`,
      )
      .then(response => {
        console.log('Positon is ', response.data.features[2].place_name);
        this.setState({currentLocation: response.data.features[2].place_name});
        console.log(this.state);
      })
      .catch(error => console.log('error => ', error));
  };
  getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords);
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });
        console.log('Your Current state is ', this.state);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    this.coorstoLocation();
  };

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.UserLocation
              visible={true}
              onUpdate={this.onUserLocationUpdate}
            />
            <MapboxGL.Camera
              zoomLevel={14}
              followUserMode={'normal'}
              followUserLocation
            />
          </MapboxGL.MapView>
        </View>
      </View>
    );
  }
}
