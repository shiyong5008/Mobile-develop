import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import PropTypes from 'prop-types'

export default class FlexComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: Math.round(Math.random() * 300)
		}
	}

	static defaultProps = {
		
	}

	render() {
		let pic = 'https://picsum.photos/id/' 
		+ this.state.id.toString() + '/500/500'

		return (
			<View>
				<View style={styles.topContainer}>
					<View style={styles.middleContainer1}>
						<Text style={styles.text}>I am the first</Text>
					</View>
					<View style={styles.middleContainer2}>
						<Text style={styles.text}>I am the second</Text>
					</View>
					<View style={styles.middleContainer3}>
						<Text style={styles.text}>I am the third</Text>
					</View>
				</View>

				<View style={styles.bottomContainer}>
					<View style={styles.middleContainer1}>
						<Text style={styles.text}>I am the first</Text>
					</View>
					<View style={styles.middleContainer2}>
						<Text style={styles.text}>I am the second</Text>
					</View>
					<View style={styles.middleContainer3}>
						<Text style={styles.text}>I am the third</Text>
					</View>
				</View>

				<Image source={pic} style={{
					width: 330,
					height: 150
				}}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flexDirection: 'row',
		height: 100
	},
		bottomContainer: {
		flexDirection: 'column',
		height: 300
	},
	middleContainer1: {
		flex: 1,
		backgroundColor: '#923535',
		padding: 10,
		marginRight: 5,
		marginBottom: 5
	},
	middleContainer2: {
		flex: 1,
		backgroundColor: '#2470c5',
		padding: 10,
		marginRight: 5,
		marginBottom: 5
	},
	middleContainer3: {
		flex: 1,
		backgroundColor: '#fdff00',
		padding: 10,
		marginRight: 5,
		marginBottom: 5
	},
	text: {
		color: 'white'
	}
});