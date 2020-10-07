import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
 export default class ModelCard extends Component {
  render() {
    return (
      <View
        style={{
          paddingHorizontal: 30,
          alignSelf: 'center',
          marginTop: 290,
          backgroundColor: '#FFF',
          height: 380,
          elevation: 1,
          width: 270,
          borderRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#4b3cdb',
              fontSize: 20,
            }}>
            CAR
          </Text>
          <Text
            style={{
              color: '#a2a2db',
              fontSize: 20,
              paddingHorizontal: 12,
            }}>
            - - - - - - - -
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#4b3cdb',
              fontSize: 20,
            }}>
            NYC
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 3,
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
              paddingLeft: 120,
              fontSize: 12,
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
              fontSize: 16,
              color: '#522289',
            }}>
            09:00 AM
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              color: '#522289',
              paddingLeft: 70,
            }}>
            21:00 PM
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 16,
            color: '#a2a2db',
          }}>
          20 /12 2020
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              color: '#a2a2db',
            }}>
            Name
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              color: '#a2a2db',
              paddingLeft: 140,
            }}>
            Seat
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              color: '#522289',
            }}>
            Mohamed
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              color: '#522289',
              paddingLeft: 100,
            }}>
            20B
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: '#a2a2db',
            marginVertical: 15,
            marginTop: -5,
          }}>
          - - - - - - - - - - - - - - - - - -
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -20,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              color: '#a2a2db',
            }}>
            Class
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              color: '#a2a2db',
              paddingLeft: 144,
            }}>
            price
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              color: '#522289',
            }}>
            gold
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              color: '#4b3ca7',
              paddingLeft: 140,
            }}>
            $400
          </Text>
        </View>
        <TouchableHighlight
          underlayColor="#6600bb"
          style={{
            width: 200,
            marginLeft: 5,
            elevation: 2,
            marginTop: 25,
            backgroundColor: '#44fea1',
            paddingVertical: 13,
            borderRadius: 25,
            alignSelf: 'center',
          }}
          onPress={this.props.onPress}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 18,
              color: '#FFF',
              textAlign: 'center',
            }}>
            Check Out
          </Text>
        </TouchableHighlight>
        <Text
          style={{
            color: '#a2a2db',
            alignSelf: 'center',
            paddingLeft: 32,
            fontSize: 12,
            marginVertical: 16,
            fontFamily: 'Roboto',
          }}>
          you can travel with us to everywhere
        </Text>
      </View>
    );
  }
}
