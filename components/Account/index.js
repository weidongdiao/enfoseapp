/**
 * Created by weidongdiao on 7/8/17.
 */
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    Image,
    View,
    StatusBar,
    ListView,
    TextInput,
    ScrollView,
    FlatList,
    SectionList,
    NavigatorIOS,
    TouchableHighlight,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Button,
    Alert,
    Animated,
    Easing,
} from 'react-native';

class AccountScreen extends React.Component {
    // static navigationOptions = {
    //     title: '我的页',
    // }
    
    _onPressButton() {
        Alert.alert('u press me');
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <View>
                    <Image
                        source = {require('./img/default.png')}
                        
                        style={styles.image}
                    />
                    <TouchableHighlight onPress = {this._onPressButton} style={styles.setting} underlayColor="white">
                        <Image
                            source = {require('./img/setting.png')}
                            resizeMode='cover'
                            style={styles.icon}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress = {() => navigate('AccountSetting')} underlayColor="white">
                        <View style = {styles.account}>
                            <Image
                                source = {require('./img/male.png')}
                                resizeMode='cover'
                                style={styles.icon}
                            />
                            <Text style={styles.accountName}>Name</Text>
                        </View>
                    </TouchableHighlight>
                    
                </View>
                <View style = {styles.social}>
                    <View style = {styles.socialDetail}>
                        <Text>Following</Text>
                        <Text>4</Text>
                    </View>
                    <View style = {styles.socialDetail}>
                        <Text>Followed</Text>
                        <Text>21</Text>
                    </View>
                    <View style = {styles.socialDetail}>
                        <Text>Favourite</Text>
                        <Text>9</Text>
                    </View>
                </View>
                <View style = {styles.gift}>
                    <View style = {styles.giftDetail}>
                        <Image
                            source = {require('./img/gift.png')}
                            resizeMode='cover'
                            style={styles.icon}
                        />
                        <Text>Coupon</Text>
                    </View>
                    <View style = {styles.giftDetail}>
                        <Image
                            source = {require('./img/gift.png')}
                            resizeMode='cover'
                            style={styles.icon}
                        />
                        <Text>Coupon</Text>
                    </View>
                    <View style = {styles.giftDetail}>
                        <Image
                            source = {require('./img/gift.png')}
                            resizeMode='cover'
                            style={styles.icon}
                        />
                        <Text>Coupon</Text>
                    </View>
                    <View style = {styles.giftDetail}>
                        <Image
                            source = {require('./img/gift.png')}
                            resizeMode='cover'
                            style={styles.icon}
                        />
                        <Text>Coupon</Text>
                    </View>
                    
                </View>
                <View style = {styles.publish}>
                    <View style={styles.publichContent}>
                        <TouchableHighlight onPress={() => navigate('SocialChild')} underlayColor = "white">
                            <View >
                                <View style={styles.socialBodyText}>
                                    <Text >America National Day</Text>
                                </View>
                                <View style={styles.socialBodyImage}>
                                    <Image
                                        source={require('./img/social_1.gif')}
                                        style={{width:120, height: 120}}
                                    />
                                    <Image
                                        source={require('./img/social_1.gif')}
                                        style={{width:120, height: 120}}
                                    />
                                    <Image
                                        source={require('./img/social_1.gif')}
                                        style={{width:120, height: 120}}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
            </View>
        );
    }
}

class AccountSettingScreen extends  React.Component {
    static navigationOptions = {
        title: 'Setting',
    }
    
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.accountSetting}>
                    <Text style={styles.text}>Icon</Text>
                    <Image
                        source = {require('./img/male.png')}
                        resizeMode='cover'
                        style={styles.icon}
                    />
                </View>
                <View style = {styles.accountSetting}>
                    <Text style={styles.text}>Name</Text>
                    <Text style={styles.text}>xxx</Text>
                </View>
                <View style = {styles.accountSetting}>
                    <Text style={styles.text}>ID</Text>
                    <Text style={styles.text}>xxx</Text>
                </View>
                <View style = {styles.accountSetting}>
                    <Text style={styles.text}>More</Text>
                    <Text style={styles.text}>></Text>
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
    text: {
        fontSize: 16,
    },
    
    icon: {
        width: 25,
        height: 25,
        padding: 10,
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
    image: {
        //width: 320,
        height: 200,
        //flex: 1,
    },
    
    setting: {
        top:-185,
        right:  -(Dimensions.get('window').width - 50),
        alignItems:'flex-end',
        width: 30,
        height: 30,
    },
    account: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -160,
        padding:10,
    },
    accountName: {
        fontSize: 12,
        padding: 5,
        margin: 5,
    },
    
    social: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: 45,
        top:-110,
    },
    socialDetail: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    gift: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 2,
        padding:10,
        height: 55,
        top:-110,
    },
    giftDetail: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    
    publish: {
        top:-120,
        paddingTop: 20,
    },
    publichContent: {
        padding: 5,
    },
    socialBodyText: {
        marginBottom: 10,
        paddingLeft:5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    socialBodyImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    
    accountSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
    }
    
    
   
    
    
});

export default MainAccountScreen = StackNavigator({
    Account: {screen: AccountScreen},
    AccountSetting: {screen: AccountSettingScreen},
});

MainAccountScreen.navigationOptions = {
    tabBarLabel: 'ACCOUNT',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./img/account-icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
};