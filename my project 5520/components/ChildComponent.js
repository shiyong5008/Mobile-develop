import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class ChildComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {data1, data2, data3} = this.props
        return (
            <View>
                <Text style={{fontSize: 20}}>{data1 + " " + data2 + " " + data3}</Text>
            </View>
        )
    }
}