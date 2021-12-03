import React, {Component} from 'react'
import {Modal, Button, Text, View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

export default class ThirdScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isModal:false
		}
	}

	showModal() {
        this.setState({
            isModal:true
        })
    }
    
    onRequestClose() {
        this.setState({
            isModal:false
        });
    }
	
	static defaultProps = {
		
	}

	render() {

		return (
			<View style={styles.container}>

				<Text>
					Third Screen
				</Text>

				<Modal
                    animationType='none'
                    transparent={false}
                    visible={this.state.isModal}
                    onRequestClose={() => {this.onRequestClose()}}>
                    <View style={styles.centeredView}>
						<Text>
						This is the modal to show a random pic
						</Text>
						<Text>
						If not see pic  pls close and re open
						</Text>

						<Image source={{uri:'https://picsum.photos/id/'+ 
							Math.floor(Math.random()*100) +'/200'}}
							style={{
							width: 193,
							height: 110
						}}/>
                           
                        <Button
							title="close modal"
                            onPress={() => {{
                                this.setState({
                                    isModal:false
                                })
                            }}}
                            />
                    </View>
                </Modal>

				<Button
					title="open modal"
                    onPress={() => this.showModal()}/>

				<Button
					title="go to home screen"
					onPress={()=> this.props.navigation.navigate('Home')}/>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
    }
})