import React, {Component} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import * as Permissions from 'expo-permissions'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

export default class MapComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: 50.60254331180157,
				latitudeDelta: 0.2729186541296684,
				longitude: 16.721875704824924,
				longitudeDelta: 0.26148553937673924,
			}

		}
		this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
	}

	onRegionChangeComplete(region) {
		console.log(region);
		this.setState({region});
	}
	
	static defaultProps = {
		
	}

	render() {
		return (
			<MapView
			region={this.state.region}
			onRegionChangeComplete={this.onRegionChangeComplete}
			style={styles.map}
			/>
		)
	}
}

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},

})