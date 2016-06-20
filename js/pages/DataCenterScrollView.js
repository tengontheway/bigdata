import React, { Component } from 'react';
import DataRow from './DataRow';
import IDSearchView from '../views/IDSearchView'

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ListView,
} from 'react-native';

export default class DataCenterScrollView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }).cloneWithRows([
                { name: "证件搜索", icon: require('./img/id0.png') },
                { name: "电话搜索", icon: require('./img/id1.png') },
                { name: "邮箱搜索", icon: require('./img/id2.png') },
                { name: "超级搜索", icon: require('./img/id3.png') },
            ]),
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.flex_banner}>
                    <Image style={styles.banner} source={require('./img/banner.png') } />
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID) =>
                        <DataRow id={rowID} name={rowData.name} icon={rowData.icon} onPress={() => this.SearchItem(rowID, rowData) }>
                        </DataRow>}
                    >
                </ListView>
            </ScrollView>
        );
    }

    // 查询功能
    SearchItem(rowID: number, rowData) {
        this.props.navigator.push({
            component: IDSearchView,
            title: rowData.name,
            rightButtonTitle: '更多',
            onRightButtonPress: function () {
                alert('更多...!');
            }
        });
    }
}

const styles = StyleSheet.create({
    contentContainer: {

        // paddingVertical: 20
    },
    flex_banner: {
        flex: 1,
        flexDirection: 'row',
    },
    banner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // resizeMode: Image.resizeMode.contain,
        height: 200,
    }
});

