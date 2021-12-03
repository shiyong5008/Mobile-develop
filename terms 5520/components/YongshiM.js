import React, {Component} from 'react'
import {Alert, TextInput, ScrollView, Text, View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


export default class MyTable extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: 0

		}
	}
	
	static defaultProps = {
		message: 'input 0-20 to view 0-20 random pics'
	}

	
	checkValueIsNumberOrNot = () => {
    
    if (isNaN(this.state.id)) {
      
      alert ('Input is not a Number');
    } else {
      
      alert ('Input is a Number');
    }
	}
	


  render() {

    let lists = []
      for (let j = 0; j <parseInt(this.state.id); j++) {
        lists.push((Math.round((Math.random()+1)*150)))
      }

    return(
      <View>

      <Text> {this.props.message} </Text>
	  <Text> {this.checkValueIsNumberOrNot} </Text>

				<TextInput style = {{
				height: 20,
				width: 150,
				borderColor: 'gray',
				borderWidth: 1
			}}
			placeholder = "input 0-20"
			
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
					width: 50,
					height: 20
				}}/>

                </Text>
        })
       }


       </ScrollView>
				

       </View>
    )
  }

}