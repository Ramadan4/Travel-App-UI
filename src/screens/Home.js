import React from 'react';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/back.png')}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            alignItems: 'center',
            paddingHorizontal: 40,
          }}>
          <Icon name="menu" size={30} color="#a2a2db" style={{width: 20}} />
          <Icon
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{marginLeft: 230}}
          />
        </View>
        <View style={{paddingHorizontal: 40, marginTop: 25}}>
          <Text style={{fontSize: 30, color: '#522289', fontFamily: 'serif'}}>
            Hello
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: '#a2a2db',
              fontFamily: 'Roboto',
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
            }}>
            you can travel with us to everywhere{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: 40,
              alignItems: 'center',
              marginTop: 30,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Image
              source={require('../images/search.png')}
              style={{height: 18, width: 14}}
            />
            <TextInput
              placeholder="Search here"
              style={{paddingHorizontal: 20, fontSize: 15, color: '#ccccef'}}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginRight: -40, marginTop: 30}}>
            {/* the first image buttom */}

            <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('Detail')}}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: '#5facdb',
              }}>
              <Image
                source={require('../images/p.png')}
                style={{height: 25, width: 25}}
              />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: '#ff5c83',
                marginHorizontal: 22,
              }}>
              <Icon name="office-building" color="white" size={32} />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: '#ffa06c',
              }}>
              <Icon name="bus" color="white" size={32} />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: '#bb32fe',
                marginLeft: 22,
              }}>
              <Icon name="dots-horizontal" color="white" size={32} />
            </View>
          </ScrollView>
          <Text
            style={{
              color: '#fff',
              fontSize: 17,
              marginTop: 50,
              fontFamily: 'Roboto',
            }}>
            Recommended
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginRight: -40, marginTop: 30}}>
            {/* the first image buttom */}
            <View
              style={{
                backgroundColor: '#fefefe',
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}>
              <Image
                source={require('../images/1.jpg')}
                style={{width: 180, height: 130, borderRadius: 10}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 11,
                      color: '#a2a2db',
                    }}>
                    you can travel with us to everywhere
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#fefefe',
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 20,
              }}>
              <Image
                source={require('../images/2.jpg')}
                style={{width: 180, height: 130, borderRadius: 10}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 11,
                      color: '#a2a2db',
                    }}>
                    you can travel with us to everywhere
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#5facdb" />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fefefe',
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginRight: 20,
              }}>
              <Image
                source={require('../images/3.jpg')}
                style={{width: 180, height: 130, borderRadius: 10}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 11,
                      color: '#a2a2db',
                    }}>
                    you can travel with us to everywhere
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fefefe',
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}>
              <Image
                source={require('../images/1.jpg')}
                style={{width: 180, height: 130, borderRadius: 10}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 11,
                      color: '#a2a2db',
                    }}>
                    you can travel with us to everywhere
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    
  },
});
