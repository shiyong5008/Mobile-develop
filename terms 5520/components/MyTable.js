import React, {Component} from 'react'
import {TextInput, ScrollView, Alert, Text, View, Button, 
Image, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


export default class MyTable extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: 0

		}
	}
	
	static defaultProps = {
		message: 'input pic id, and will get the id to id+9pics'
	}



  render() {

    let lists = []
      for (let j = this.state.id; j <parseInt(this.state.id) + 9; j++) {
//        lists.push((j+Math.round((Math.random()+1)*150)))
			lists.push(j)

      }

    return(
      <View>

      <Text> {this.props.message} </Text>

				<TextInput style = {{
				height: 40,
				width: 250,
				borderColor: 'gray',
				borderWidth: 1
			}}
			placeholder = "Pls provide pic id, eg input: 99"
			onSubmitEditing = {(event) => this.setState({id:event.nativeEvent.text})}

			/>


      <ScrollView
					

					contentContainerStyle={{padding: 30}}
					// horizontal={false}
					onContentSizeChange={(contentWidth, contentHeight)=>
						{console.log('Height: ' + contentHeight 
						+ 'Width: ' + contentWidth)}
					}
					onScroll={()=>console.log('you are scrolling')}
					pagingEnabled={true}
				>

      {
        lists.map((list, index)=>{
        return <Text key={index}> 
                  the {list} pic:  
               
               <Image key={index} source={
				'https://picsum.photos/id/'+list.toString()+'/200'} 
				    style={{
					width: 193,
					height: 110
				}}/>

                </Text>
        })
       }


       </ScrollView>
				

       </View>
    )
  }

}