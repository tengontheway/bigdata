/**
 * 数据中心数据的每一行信息
 * 1.外部传入图片的地址
 * 2.根据列的奇偶返回不同样式
 * 
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

export default class DataRow extends Component {
    render() {
        if (this.props.id % 2 === 0) {
            return (
                <TouchableOpacity activeOpacity = {0.6} onPress={this.props.onPress}>
                    <View style={styles.border}>
                        <View style={[styles.flex, styles.row]}>
                            <Image style={[styles.flex_img, styles.img]} source={this.props.icon} />
                            <Text style={[styles.flex_text]}>{this.props.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity activeOpacity = {0.6} onPress={this.props.onPress}>
                    <View style={styles.border}>
                        <View style={[styles.flex, styles.row]}>
                            <Text style={[styles.flex_text]}>{this.props.name}</Text>
                            <Image style={[styles.flex_img, styles.img]} source={this.props.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 3,
        borderBottomColor: '#b2b2b2',
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flex_text: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#b2b2b2'
    },
    flex_img: {

    },
    img: {
        resizeMode: Image.resizeMode.contain,
    },
    row: {

        height: 165,
    }
});