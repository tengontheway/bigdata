/**
 * 主界面下方的TabBar
 */

import React, { Component } from 'react';
import DataCenterScrollView from '../pages/DataCenterScrollView';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TabBarIOS,
  NavigatorIOS,
  ScrollView
} from 'react-native';


export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'message',
    };
  }

  select(id) {
    this.setState({
      id: id,
    });
  }

  render() {
    return (
      <TabBarIOS style={styles.flex}>
        <TabBarIOS.Item
          title="数据中心"
          icon={require('./img/message.png') }
          onPress={() => this.select('message') }
          selected={this.state.id == 'message'}
          >
          <NavigatorIOS
            style={styles.flex}
            initialRoute={{
              component: DataCenterScrollView,
              title: '数据中心',
              passProps: {},
            }}
            >
          </NavigatorIOS>

        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="实时通讯"
          icon={require('./img/phone.png') }
          onPress={() => this.select('phone') }
          selected={this.state.id == 'phone'}
          >
          <Text style={styles.text}>Tab2</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="通讯录"
          icon={require('./img/phone1.png') }
          onPress={() => this.select('contacts') }
          selected={this.state.id == 'contacts'}
          >
          <Text style={styles.text}>Tab3</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="个人信息"
          icon={require('./img/star.png') }
          onPress={() => this.select('star') }
          selected={this.state.id == 'star'}
          >
          <Text style={styles.text}>Tab4</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: 'red',
    marginTop: 25,
  }
});