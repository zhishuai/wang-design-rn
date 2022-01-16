// Button.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';

export default class Button extends TouchableOpacity {
    render() {
        return (
            <View>
                {super.render()}
            </View>
        )
    }    
}