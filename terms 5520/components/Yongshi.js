import React, {Component} from 'react'
import {TextInput, ScrollView, Text, View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


export default class MyTable extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: 0

		}
	}
	
	static defaultProps = {
		message: 'input 1-20 to view 1-20 random pics'
	}


  render() {

    let lists = []
      for (let j = 0; j <parseInt(this.state.id); j++) {
        lists.push((Math.round((Math.random()+1)*150)))
      }

    return(
      <View>

      <Text> {this.props.message} </Text>

				<TextInput style = {{
				height: 20,
				width: 250,
				borderColor: 'gray',
				borderWidth: 1
			}}
			placeholder = "input 1-20"
			onSubmitEditing = {(event) => this.setState({id:event.nativeEvent.text})}

			/>




      {
        lists.map((list, index)=>{
        return <Text key={index}> 
                  the {list} pic:  
               
               <Image key={index} source={
				'https://picsum.photos/id/'+list.toString()+'/200'} 
				    style={{
					width: 50,
					height: 20
				}}/>

                </Text>
        })
       }


				

       </View>
    )
  }

}