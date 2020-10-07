import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
export default class ListCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          paddingHorizontal: 36,
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 182,
          elevation: 1,
          width: 270,
          borderRadius: 15,
        }}>
        <View
          style={{flexDirection: 'row', paddingTop: 20, alignSelf: 'center'}}>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#4b3ca7',
              fontSize: 20,
            }}>
            CAR
          </Text>
          <Text
            style={{
              color: '#4b3ca7',
              fontSize: 20,
              paddingHorizontal: 12,
            }}>
            - - - - - - - -
          </Text>
          <Text
            style={{
              color: '#4b3ca7',
              fontSize: 20,
              fontFamily: 'Roboto',
            }}>
            NYC
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#a2a2db',
              fontSize: 11,
            }}>
            Cairo
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#a2a2db',
              fontSize: 11,
              paddingLeft: 120,
            }}>
            New York
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#522289',
              fontSize: 16,
            }}>
            09:00 AM
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#522289',
              fontSize: 16,
              paddingLeft: 70,
            }}>
            21:00 PM
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Roboto',
            color: '#a2a2db',
            fontSize: 12,
          }}>
          20 /12/ 2020
        </Text>
        <Text
          style={{
            color: '#a2a2db',
            fontSize: 17,
            marginRight: -5,
            marginVertical: 8,
          }}>
          - - - - - - - - - - - - - - - - - - - - -
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -8,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 'Roboto',
              color: '#522289',
              fontSize: 16,
            }}>
            Tecket Price
          </Text>
          <Text
            style={{
              fontSize: 'Roboto',
              color: '#4d2ca7',
              paddingLeft: 75,
              fontSize: 16,
            }}>
            $400
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
