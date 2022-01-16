// Button.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';

export default class Button extends TouchableOpacity {
    render() {
        return (
            <View style={{backgroundColor: 'red'}}>
                <Text>testButton</Text>
            </View>
        )
    }    
}