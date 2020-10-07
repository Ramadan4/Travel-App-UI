import React, { Component } from 'react';
import { View, Text, Alert, Modal, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModelCard from './ModelCard';
import ListCard from './ListCard';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Detail extends Component {
    state = {
        modeVisiable: false,
    };
    setModeVisiable = (visible) => {
        this.setState({ modeVisiable: visible });
    };
    render() {
        const { modeVisiable } = this.state;
        return (
            <ImageBackground
                source={require('../images/back2.png')}
                style={{ width: '100%', height: '100%' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 40,
                        alignItems: 'center',
                        paddingHorizontal: 40,
                    }}>
                    <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
                    <Icon
                        name="account-circle"
                        size={33}
                        color="#a2a2db"
                        style={{ marginLeft: 230 }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        marginTop: 50,
                        marginBottom: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            backgroundColor: '#5facdb',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../images/p.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 40,
                    }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontFamily: 'Roboto',
                            color: '#fff',
                        }}>
                        CAR
          </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#a2a2db',
                            paddingHorizontal: 40,
                        }}>
                        {' '}
            - - - - - - - - - -
          </Text>
                    <Text
                        style={{
                            fontSize: 24,
                            fontFamily: 'Roboto',
                            color: '#fff',
                        }}>
                        NYC
          </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 40,
                    }}>
                    <Text style={{ color: '#a2a2db', fontFamily: 'Roboto' }}>Cairo</Text>
                    <Text
                        style={{ color: '#a2a2db', fontFamily: 'Roboto', paddingLeft: 210 }}>
                        New York
          </Text>
                </View>
                <Text
                    style={{
                        color: '#a2a2db',
                        fontFamily: 'Roboto',
                        paddingHorizontal: 40,
                    }}>
                    15 / 12 / 2020
        </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 50,
                        marginTop: 60,
                    }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/dots.png')}
                            style={{ width: 20, height: 18 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/filter.png')}
                            style={{ width: 20, height: 18, marginLeft: 228 }}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={{ marginVertical: 5 }}
                    showsVerticalScrollIndicator={false}>
                    <ListCard
                        onPress={() => {
                            this.setModeVisiable(true);
                        }}
                    />
                        <ListCard
                        onPress={() => {
                            this.setModeVisiable(true);
                        }}
                    />
                        <ListCard
                        onPress={() => {
                            this.setModeVisiable(true);
                        }}
                    />

                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modeVisiable}
                            onRequestClose={() => {
                                Alert.alert('Model is closed');
                            }}>
                            <ModelCard
                                onPress={() => {
                                    this.setModeVisiable(! modeVisiable);
                                }}
                            />
                        </Modal>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
