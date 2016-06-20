/**
 * ID搜索
 */
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';

export default class IDSearchView extends Component {
    
    render() {
        alert("ceneter........");
        return(
            <Text style={styles.text}>ID搜索</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
});