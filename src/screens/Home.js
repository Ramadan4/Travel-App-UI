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
        source={require('../images/back3.jpg')}
        style={{width: '100%', height: '100%'}}>
        {/* the two icons in the top of page  */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            alignItems: 'center',
            paddingHorizontal: 40,
          }}>
          {/* the menu Icon  */}

          <TouchableOpacity>
            <Icon name="menu" size={40} color="#a2a2db" style={{width: 30}} />
          </TouchableOpacity>
          {/* the account Icon  */}

          <TouchableOpacity>
            <Icon
              name="account-circle"
              size={40}
              color="#a2a2db"
              style={{marginLeft: 250}}
            />
          </TouchableOpacity>
        </View>
        {/* the view after icons  */}
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
            you can travel with us to everywhere
          </Text>
          {/* the search bar   */}

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
            <TouchableOpacity>
              <Image
                source={require('../images/search.png')}
                style={{height: 20, width: 15}}
              />
            </TouchableOpacity>

            <TextInput
              placeholder="Search here"
              //underlineColorAndroid={false}
              style={{paddingHorizontal: 30, fontSize: 15, color: '#000'}}
            />
          </View>
          {/* the ScrollView horizontal  */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginRight: -40, marginTop: 30}}>
            {/* the first image buttom Plan  */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Detail');
              }}
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
            {/* the second image buttom office  */}
            <TouchableOpacity
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
            </TouchableOpacity>
            {/* the therd image buttom bus  */}
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: '#ffa06c',
              }}>
              <Icon name="bus" color="white" size={32} />
            </TouchableOpacity>
            {/* the image buttom docker  */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Places');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: 'red',
                marginHorizontal: 20,
              }}>
              <Icon name="docker" color="withe" size={32} />
            </TouchableOpacity>
            {/* the image buttom food-apple-outline  */}
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: '#5222ad',
                marginRight: 20,
              }}>
              <Icon name="food-apple-outline" color="white" size={32} />
            </TouchableOpacity>
            {/* the image buttom gift-outline  */}
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: '#2255ad',
              }}>
              <Icon name="gift-outline" color="white" size={32} />
            </TouchableOpacity>
            {/* the image buttom dots-horizontal  */}
            <TouchableOpacity
         
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
            </TouchableOpacity>
          </ScrollView>

          {/* the text  Recommended  */}

          <Text
            style={{
              color: '#000',
              fontSize: 20,
              marginTop: 40,
              fontFamily: 'Roboto',
            }}>
            Recommended
          </Text>
          {/* the ScrollView of recommended   */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginRight: -40, marginTop: 30}}>
            {/* the first image buttom */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Detail');
              }}
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
                <Icon name="map-marker" size={30} color="#ff5c83" />
              </View>
            </TouchableOpacity>
            {/* the second image buttom */}

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Detail');
              }}
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
                <Icon name="map-marker" size={30} color="#5facdb" />
              </View>
            </TouchableOpacity>

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
            {/* the last image buttom */}

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Places');
              }}
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
                <Icon name="map-marker" size={30} color="#5facdb" />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
});
