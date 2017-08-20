/**
 * Created by weidongdiao on 7/8/17.
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    ScrollView,
    TouchableHighlight,
    Button,
    Alert,
} from 'react-native';
import FilterArticleScreen from './component/filter';
import ChildSocialScreen from './component/detail';


class SocialScreen extends React.Component {
    // static navigationOptions = {
    //     title: '社区页',
    // }
    
    constructor(props) {
        super(props);
        this.state = {isFollowed: false};
        this.followClick = this.followClick.bind(this);
    }
    
    followClick() {
        this.setState(prevState => ({
            isFollowed: !prevState.isFollowed
        }));
    }
    
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    
    
    render() {
        const { navigate } = this.props.navigation;
        var socials = SOCIALS;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View >
                        <TextInput style={styles.searchBar} placeholder="Search..." />
                    </View>
                    <View style={styles.icon}>
                        <Image
                            source = {require('./img/cart.png')}
                            resizeMode='stretch'
                            style={{width:25, height: 25}}
                        />
                    </View>
                </View>
                
                <View style={styles.filter}>
                    <View >
                        <TouchableHighlight onPress = {() => navigate('FilterArticle')} underlayColor = "white">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Entertainment</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <TouchableHighlight onPress = {() => navigate('FilterArticle')} underlayColor = "white">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Food</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <TouchableHighlight onPress = {() => navigate('FilterArticle')} underlayColor = "white">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Suggestion</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                <View style={styles.wrapper}>
                    <Swiper autoplay={true} >
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/social_2.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/social_5.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/social_6.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('./img/social_7.png')}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                    </Swiper>
                </View>
                
                
                <ScrollView style={styles.socialContent}>
                    <View>
                        <View style={styles.socialHeader}>
                            <View style={styles.socialAccount}>
                                <Image
                                    source={require('./img/male.png')}
                                    style={{width:25,height:25}}
                                />
                                <Text>{socials[1].name}</Text>
                            </View>
                            <View style={styles.socialPosition}>
                                <TouchableHighlight onPress = {this.followClick} underlayColor = "white" >
                                    <View style={styles.followButton}>
                                        <Text style={styles.followButtonText}>{this.state.isFollowed ? 'Followed': '+Follow'}</Text>
                                    </View>
                                </TouchableHighlight>
                                <Image
                                    source={require('./img/share.png')}
                                    style={{width:25,height:25}}
                                />
                            </View>
                        </View>
                        <View style={styles.socialBody}>
                            <TouchableHighlight onPress={() => navigate('SocialChild')} underlayColor = "white">
                                <View>
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
                        <View style={styles.socialFoot}>
                            <View style={styles.socialFootPosition}>
                                <Image
                                    source={require('./img/like.png')}
                                    style={{width:20,height:20}}
                                />
                                <Text>9</Text>
                            </View>
                            <View style={styles.socialFootPosition}>
                                <Image
                                    source={require('./img/comment.png')}
                                    style={{width:20,height:20}}
                                />
                                <Text>9</Text>
                            </View>
                            <View style={styles.socialFootPosition}>
                                <Image
                                    source={require('./img/star.png')}
                                    style={{width:20,height:20}}
                                />
                                <Text>9</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.socialHeader}>
                            <View style={styles.socialAccount}>
                                <Image
                                    source={require('./img/male.png')}
                                    style={{width:25,height:25}}
                                />
                                <Text>{socials[0].name}</Text>
                            </View>
                            <View style={styles.socialPosition}>
                                <TouchableHighlight onPress = {this.followClick} underlayColor = "white" >
                                    <View style={styles.followButton}>
                                        <Text style={styles.followButtonText}>{this.state.isFollowed ? 'Followed': '+Follow'}</Text>
                                    </View>
                                </TouchableHighlight>
                                <Image
                                    source={require('./img/share.png')}
                                    style={{width:25,height:25}}
                                />
                            </View>
                        </View>
                        <View style={styles.socialBody}>
                            <TouchableHighlight onPress={() => navigate('SocialChild')} underlayColor = "white">
                                <View>
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
                        <View style={styles.socialFoot}>
                            <View style={styles.socialFootPosition}>
                                <Image
                                    source={require('./img/like.png')}
                                    style={{width:20,height:20}}
                                />
                                <Text>9</Text>
                            </View>
                            <View style={styles.socialFootPosition}>
                                <Image
                                    source={require('./img/comment.png')}
                                    style={{width:20,height:20}}
                                />
                                <Text>9</Text>
                            </View>
                            <View style={styles.socialFootPosition}>
                                <Image
                                    source={require('./img/star.png')}
                                    style={{width:20,height:20}}
                                />
                                <Text>9</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


var SOCIALS = [
    {id: 1, name: 'Tom', icon:'male.png', followed: false, title: 'America National Day',image1: './img/social_1.gif',image2: './img/social_1.gif',image3: './img/social_1.gif', likes: 4, comments: 2, follows: 3},
    {id: 2, name: 'Alex', icon:'./img/male.png', followed: true, title: 'Enjoy festival',image1: './img/social_3.png',image2: './img/social_2.png',image3: './img/social_3.png', likes: 24, comments: 12, follows: 31},
    {id: 3, name: 'Sandy', icon:'./img/female.png', followed: true, title: 'Enjoy foods',image1: './img/social_5.png',image2: './img/social_4.png',image3: './img/social_5.png', likes: 7, comments: 9, follows: 2}
    
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    content: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        //backgroundColor: 'grey',
        // justifyContent: 'center',
        // alignItems: 'center',
        
    },
    searchBar: {
        width: 250,
        height: 20,
        borderWidth: 2,
        borderRadius: 8,
        paddingTop: 2,
        paddingLeft: 95,
        paddingRight: 10,
        paddingBottom: 2,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 65,
        marginRight: 0,
        //backgroundColor: 'grey',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0.3,
    },
    icon: {
        //flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        right: -10,
    },
    button: {
        marginTop: 10,
        paddingTop: 5,
        borderBottomWidth: 5,
        borderBottomColor: 'grey',
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        //backgroundColor: 'white',
        // borderBottomWidth: 3,
        // borderBottomColor: 'grey',
        
    },
    buttonText: {
        //padding: 2,
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        //marginTop:5
        //backgroundColor: 'white',
        
    },
    //Slider
    wrapper: {
        height: 220,
        //flex:1,
        backgroundColor: '#bdc3c7',
        //marginBottom: 20,
        borderBottomWidth: 3,
    },
    slide: {
        height: 220,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        //width: 320,
        height: 220,
        //flex: 1,
    },
    
    //Social Content
    socialContent: {
        //flexDirection: 'row',
        //marginTop: 45,
        padding: 5,
        height: 150,
        //flex: 1,
        borderWidth: 1,
        
    },
    socialHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        //marginRight: 10,
        borderBottomWidth: 1,
        
    },
    socialPosition: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    socialAccount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    followButton: {
        padding:5,
        // borderBottomWidth: 5,
        // borderBottomColor: 'grey',
        width: 80,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    followButtonText: {
        color: '#F5FCFF',
        textAlign: 'center',
        fontSize: 16,
    },
    
    socialBody: {
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        padding: 5,
        
    },
    socialBodyText: {
        marginBottom: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    socialBodyImage: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    socialFoot: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        height: 50,
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    
    socialFootPosition: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    tabIcon: {
        width: 25,
        height: 25,
        padding: 10,
    },
    
    
    
});

export  default MainSocialScreen = StackNavigator({
    Social: {screen: SocialScreen},
    SocialChild: {screen: ChildSocialScreen},
    FilterArticle: {screen: FilterArticleScreen}
});

MainSocialScreen.navigationOptions = {
    tabBarLabel: 'SOCIAL',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./img/social-icon.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
        />
    ),
};