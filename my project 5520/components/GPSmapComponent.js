import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity, Button} from 'react-native'
import PropTypes from 'prop-types'
import * as Permissions from 'expo-permissions'
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location'

export default class GPSmapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  locationPermission: 'unknown',
	  position: 'unknown',
      region: {
				latitude: 50.60254331180157,
				latitudeDelta: 0.2729186541296684,
				longitude: 16.721875704824924,
				longitudeDelta: 0.26148553937673924,
			}
    }
	this.btnPress = this.btnPress.bind(this);
	this.btnPressGo = this.btnPressGo.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
  }

  	static defaultProps = {

	}

	_getLocationPermissions = async()=>{
		let {status} = await Permissions.askAsync(Permissions.LOCATION);
		if (status!=='granted') {
			this.setState({locationPermission: false});
		} else {
			this.setState({locationPermission: true});
		}
	}

	componentDidMount() {
		this._getLocationPermissions();
		Location.installWebGeolocationPolyfill();
		navigator.geolocation.getCurrentPosition((position)=>{

		this.setState({
			region :
			{
				latitude: position.coords.latitude,
				latitudeDelta: 0.2729186541296684,
				longitude: position.coords.longitude,
				longitudeDelta: 0.26148553937673924,
			}
		})

		},
			(error)=> alert(JSON.stringify(error)));
	}

  	onRegionChangeComplete(region) {
		console.log(region);
		this.setState({region});
	}

  btnPress() {
		Location.installWebGeolocationPolyfill();
		navigator.geolocation.getCurrentPosition((position)=>{

		this.setState({
			region :
			{
				latitude: position.coords.latitude,
				latitudeDelta: 0.2729186541296684,
				longitude: position.coords.longitude,
				longitudeDelta: 0.26148553937673924,
			}
		})
		},
			(error)=> alert(JSON.stringify(error)));
	}

	btnPressGo() {
		this.setState({
			region :
			{
				latitude: (Math.random()-0.5) * 180,
				latitudeDelta: 0.2729186541296684,
				longitude: (Math.random()-0.5) * 360,
				longitudeDelta: 0.26148553937673924,
			}
		})
	}

  render() {
    return (

    	<MapView
			region={this.state.region}
			onRegionChangeComplete={this.onRegionChangeComplete}
			style={styles.map}
			>

			<Marker coordinate = {this.state.region}></Marker>
		       


			   <View style={styles.container2}>
				<Button
					onPress={this.btnPress}
					title="me"
					color="violet"
					accesibilityLabel="This is a button"
				/>
			   </View>

			   <View style={styles.container1}>
				<Button
					onPress={this.btnPressGo}
					title="jump"
					color="violet"
					accesibilityLabel="This is a button"
				/>
			   </View>

			  
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    opacity: 0.8,
  },

  container2: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    opacity: 0.8,
  },

  container3: {
    flexDirection: 'column',
    width: 160,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c0d6e4",
    opacity: 0.8,
  },

  container: {
    flexDirection: 'row',
    width: 100,
  },

  map: {
		...StyleSheet.absoluteFillObject,
  },
});