import React, {Component} from 'react'
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell, 
Text, View, Button, Image, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

export default class MyKey extends Component {
    state = {

    }
    render() {

        const users = ['mike', 'tom', 'shi']

        
        return(
            <View>
            {
                users.map((user, index)=>{
                return <Text key={index}> 
                        {user}
                       </Text>
                })
            }
            </View>
        )
    }

}