/**
 * Created by weidongdiao on 7/8/17.
 */
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    Image,
    View,
    ListView,
    TextInput,
    ScrollView,
    Picker,
    FlatList,
    SectionList,
    NavigatorIOS,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Button,
    Alert,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import DetailScreen from '../Home/components/goods.js'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';



class StoreScreen extends React.Component {
    // static navigationOptions = {
    //     title: '商城页',
    // }
    
    constructor(props) {
        super(props);
        this.state = {
            menu: null
        }
    }
    
    componentDidMount() {
        // We can use the public context API to open/close/toggle the menu.
        //setInterval(() => {
        //  this.refs.MenuContext.toggleMenu('menu1');
        //}, 2000);
    }
    
    _onPressButton() {
        Alert.alert('u press me');
    }
    
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Swiper autoplay={true} >
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/default.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/default.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/default.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/default.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                    </Swiper>
                </View>
            
            
                <ScrollView style={styles.content}>
                    <View >
                        <View>
                            <TouchableHighlight onPress = {() => navigate('StoreDetail')} underlayColor="white">
                                <View style = {styles.item}>
                                    <View style = {styles.itemDetail}>
                                        <Image
                                            source={require('./img/ticket.png')}
                                            style = {{width:20,height:20}}
                                        />
                                        <Text style = {styles.itemTitle}>Ticket</Text>
                                        <Text style = {styles.itemSold}>Selling 4</Text>
                                    </View>
                                    <View style = {styles.itemPrice}>
                                        <Text>from $21</Text>
                                        <Text>></Text>
                                    </View>
                                </View>
                                
                            </TouchableHighlight>
                            
                        </View>
                        <View>
                            <TouchableHighlight onPress = {() => navigate('StoreDetail')} underlayColor="white">
                                <View style = {styles.item}>
                                    <View style = {styles.itemDetail}>
                                        <Image
                                            source={require('./img/ticket.png')}
                                            style = {{width:20,height:20}}
                                        />
                                        <Text style = {styles.itemTitle}>Ticket</Text>
                                        <Text style = {styles.itemSold}>Selling 2</Text>
                                    </View>
                                    <View style = {styles.itemPrice}>
                                        <Text>from $5</Text>
                                        <Text>></Text>
                                    </View>
                                </View>
        
                            </TouchableHighlight>
    
                        </View>
                        <View>
                            <TouchableHighlight onPress = {() => navigate('StoreDetail')} underlayColor="white">
                                <View style = {styles.item}>
                                    <View style = {styles.itemDetail}>
                                        <Image
                                            source={require('./img/ticket.png')}
                                            style = {{width:20,height:20}}
                                        />
                                        <Text style = {styles.itemTitle}>Ticket</Text>
                                        <Text style = {styles.itemSold}>Selling 9</Text>
                                    </View>
                                    <View style = {styles.itemPrice}>
                                        <Text>from $50</Text>
                                        <Text>></Text>
                                    </View>
                                </View>
        
                            </TouchableHighlight>
    
                        </View>
                        <View>
                            <TouchableHighlight onPress = {() => navigate('StoreDetail')} underlayColor="white">
                                <View style = {styles.item}>
                                    <View style = {styles.itemDetail}>
                                        <Image
                                            source={require('./img/ticket.png')}
                                            style = {{width:20,height:20}}
                                        />
                                        <Text style = {styles.itemTitle}>Ticket</Text>
                                        <Text style = {styles.itemSold}>Selling 19</Text>
                                    </View>
                                    <View style = {styles.itemPrice}>
                                        <Text>from $16</Text>
                                        <Text>></Text>
                                    </View>
                                </View>
        
                            </TouchableHighlight>
    
                        </View>
                        <View>
                            <TouchableHighlight onPress = {() => navigate('StoreDetail')} underlayColor="white">
                                <View style = {styles.item}>
                                    <View style = {styles.itemDetail}>
                                        <Image
                                            source={require('./img/ticket.png')}
                                            style = {{width:20,height:20}}
                                        />
                                        <Text style = {styles.itemTitle}>Ticket</Text>
                                        <Text style = {styles.itemSold}>Selling 11</Text>
                                    </View>
                                    <View style = {styles.itemPrice}>
                                        <Text>from $12</Text>
                                        <Text>></Text>
                                    </View>
                                </View>
        
                            </TouchableHighlight>
    
                        </View>
                        <View>
                            <TouchableHighlight onPress = {() => navigate('StoreDetail')} underlayColor="white">
                                <View style = {styles.item}>
                                    <View style = {styles.itemDetail}>
                                        <Image
                                            source={require('./img/ticket.png')}
                                            style = {{width:20,height:20}}
                                        />
                                        <Text style = {styles.itemTitle}>Ticket</Text>
                                        <Text style = {styles.itemSold}>Selling 17</Text>
                                    </View>
                                    <View style = {styles.itemPrice}>
                                        <Text>from $22</Text>
                                        <Text>></Text>
                                    </View>
                                </View>
        
                            </TouchableHighlight>
    
                        </View>
                    </View>
                
                
                </ScrollView>
                
                <View style = {styles.district}>
                    <TouchableHighlight onPress = {this._onPressButton}>
                        <Text style={styles.subtitle}>Manhattan</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress = {this._onPressButton}>
                        <Text style={styles.subtitle}>East Village</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress = {this._onPressButton}>
                        <Text style={styles.subtitle}>Flushing</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    content: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 35,
        //backgroundColor: 'grey',
        // justifyContent: 'center',
        // alignItems: 'center',
        
    },
    icon: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    button: {
        marginTop: 8,
        paddingRight: 5,
        //borderWidth: 5,
        borderColor: 'white',
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
        padding: 2,
        color: 'white',
        //fontSize: 12,
    },
    
    //Slider
    wrapper: {
        height: 250,
        //flex:1,
        backgroundColor: '#2196F3',
        //marginBottom: 20,
    },
    slide: {
        height: 250,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        //width: 320,
        height: 250,
        //flex: 1,
    },
    detail: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize:16,
        textAlign: 'center',
        padding:10,
    },
    subDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize:16,
        textAlign: 'center',
        padding:10,
        
    },
    subtitle: {
        fontSize:14,
        textAlign: 'center',
        
    },
    price: {
        padding: 5,
        fontSize: 12,
    },
    
    //Item
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 2,
        //borderBottomWidth: 2,
        height: 50,
        width: Dimensions.get('window').width,
    },
    itemDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding:10
    },
    itemTitle: {
        marginLeft: 5,
        marginRight: 10,
    },
    itemSold: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 10,
        borderRadius: 120,
        backgroundColor:'#bdc3c7',
        padding:5,
    },
    itemPrice: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 10,
    },
    
    
    district:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
        padding: 5,
        
    },
    tabIcon: {
        width: 25,
        height: 25,
        padding: 10,
    },
    
    
});

export default MainStoreScreen = StackNavigator({
    Store: { screen: StoreScreen },
    StoreDetail: { screen: DetailScreen }
    
});

MainStoreScreen.navigationOptions = {
    tabBarLabel: 'STORE',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./img/store-icon.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
        />
    ),
};