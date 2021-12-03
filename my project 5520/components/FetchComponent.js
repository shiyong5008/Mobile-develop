import React, {Component} from 'react'
import {FlatList, Text, View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


export default class FetchComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			source: []
			
		}
	}

	fetchTodos() {
		fetch('http://jsonplaceholder.typicode.com/photos?_limit=3')
			.then((response)=>response.json())
			.then((source)=>{
				this.setState({
					source
				})
			})
	}

	componentDidMount(){
		this.fetchTodos()
	}
	
	static defaultProps = {
		
	}

	renderItem({item}) {
		return (
			<View style={styles.row}>
				<Text style={styles.text}>
					{item.title}
				</Text>
				
				<Image source={{uri:item.url}} 
				    style={{
					width: 193,
					height: 110
				}}/>
			</View>
		)
	}

	render() {
		return (
			<FlatList style={styles.container}
			data={this.state.source}
			renderItem={this.renderItem}
			keyExtractor={item=>item.title}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		backgroundColor: '#F5FCFF',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 16,
		backgroundColor: 'red',
		marginBottom: 3
	},
	text: {
		flex: 1,
		color: 'black',
		fontWeight: 'bold'
	}
})