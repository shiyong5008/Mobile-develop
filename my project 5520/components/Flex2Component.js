import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import PropTypes from 'prop-types'

export default class FlexComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	static defaultProps = {
		
	}

	render() {

	const items = [styles.pacman, styles.trapezoid, styles.diamondNarrowTop];	
	let item = items[Math.floor(Math.random() * items.length)];

		return (
			<View>
				<View style={styles.topContainer}>
					<View style={styles.diamondNarrowTop}>
						<Text style={styles.text}>1</Text>
					</View>
					<View style={styles.pacman}>
						<Text style={styles.text}>2</Text>
					</View>
					<View style={styles.trapezoid}>
						<Text style={styles.text}>3</Text>
					</View>
				</View>
				<View style={styles.topContainer}>
				<Text style={styles.text}>random at below</Text>
				</View>
	

				<View style={styles.botContainer}>
				
					<View style={changeShape(Math.random())}> //{item}

						<Text style={styles.text}>random</Text>
					</View>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flexDirection: 'row',
		height: 130
	},

	botContainer: {
		flexDirection: 'column',
		height: 130
	},

	pacman: {
    width: 0,
    height: 0,
    borderTopWidth: 60,
    borderTopColor: "blue",
    borderLeftColor: "red",
    borderLeftWidth: 60,
    borderRightColor: "green",
    borderRightWidth: 60,
    borderBottomColor: "yellow",
    borderBottomWidth: 60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
	},

	diamondNarrowTop: {
    width: 0,
    height: 0,
    borderTopWidth: 60,
    borderTopColor: "blue",
    borderLeftColor: "yellow",
    borderLeftWidth: 60,
    borderRightColor: "green",
    borderRightWidth: 60,
    borderBottomColor: "red",
    borderBottomWidth: 60,
	},

	trapezoid: {
    width: 120,
    height: 0,
    borderBottomWidth: 60,
    borderBottomColor: "red",
    borderLeftWidth: 30,
    borderLeftColor: "blue",
    borderRightWidth: 30,
    borderRightColor: "yellow",
    borderStyle: "solid",
	},

	text: {
		color: 'red'
	}
});
	

function changeShape(n){
	if (n<0.33) {return styles.pacman;}
	else if (n>0.66) {return styles.diamondNarrowTop;}
	else {return styles.trapezoid;}
  }





