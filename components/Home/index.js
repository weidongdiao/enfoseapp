import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableHighlight,
    Button,
    Alert,
} from 'react-native';

import BannerScreen from './components/banner.js';
import CollectionScreen from './components/collection.js';
import FilterScreen from './components/filter.js';
import DetailScreen from './components/goods.js';



class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     title: '发现页',
    // }
    
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style = {styles.container}>
                <View style = {styles.content}>
                    <View >
                        <TextInput style = {styles.searchBar} placeholder="Search..." />
                    </View>
                    <View style = {styles.filterButton}>
                        <TouchableHighlight underlayColor = "black">
                            <View >
                                <Text>Filter</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
    
                <View style={styles.filter}>
                    <View >
                        <TouchableHighlight onPress = {() => navigate('Filter')} underlayColor = "white">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Entertainment</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <TouchableHighlight onPress = {() => navigate('Filter')} underlayColor = "white">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Food</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <TouchableHighlight onPress = {() => navigate('Filter')} underlayColor = "white">
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Life</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                <TouchableHighlight onPress = {() => navigate('Banner')} underlayColor = "white">
                    <Image
                        source = {require('./img/banner.jpeg')}
                        style = {{height: 190, width:Dimensions.get('window').width}}
                        resizeMode='stretch'
                    />
                </TouchableHighlight>
                
                
                <View style={styles.bannerContent}>
                    <View style={styles.filter}>
                        <TouchableHighlight onPress={() => navigate('Hottest')} underlayColor = "white" >
                            <View style={styles.bannerButton}>
                                <Text style={styles.square}></Text>
                                <Text style={styles.buttonText}>Popular</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigate('Must')} underlayColor = "white" >
                            <View style={styles.bannerButton}>
                                <Text style={styles.square}></Text>
                                <Text style={styles.buttonText}>Scenic</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigate('Event')} underlayColor = "white" >
                            <View style={styles.bannerButton}>
                                <Text style={styles.square}></Text>
                                <Text style={styles.buttonText}>Event</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigate('Outdoor')} underlayColor = "white" >
                            <View style={styles.bannerButton}>
                                <Text style={styles.square}></Text>
                                <Text style={styles.buttonText}>Outdoor</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigate('Other')} underlayColor = "white" >
                            <View style={styles.bannerButton}>
                                <Text style={styles.square}></Text>
                                <Text style={styles.buttonText}>Other</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                <ScrollView style={styles.scrollContent}>
                    <View style = {styles.collectionContent}>
                        <Text style={styles.title}>Featured topics</Text>
                        <Text style={styles.subtitle}> We are finding some interesting event for you</Text>
                        <TouchableHighlight onPress = {() => navigate('Collection')} underlayColor = "white">
                            <Image
                                source = {require('./img/collection1.jpeg')}
                                style = {styles.collectionImage}
                                resizeMode='stretch'
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress = {() => navigate('Collection')} underlayColor = "white">
                            <Image
                                source = {require('./img/collection2.jpeg')}
                                style = {styles.collectionImage}
                                resizeMode='stretch'
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress = {() => navigate('Collection')} underlayColor = "white">
                            <Image
                                source = {require('./img/collection3.jpeg')}
                                style = {styles.collectionImage}
                                resizeMode='stretch'
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress = {() => navigate('Collection')} underlayColor = "white">
                            <Image
                                source = {require('./img/collection4.jpeg')}
                                style = {styles.collectionImage}
                                resizeMode='stretch'
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress = {() => navigate('Collection')} underlayColor = "white">
                            <View>
                                <Text style={styles.footerText}>More></Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.suggestionContent}>
                        <Text style={styles.title}>Recommended this week</Text>
                        <Text style={styles.subtitle}>Popular activities</Text>
                        <View style={styles.eventContent}>
                            <Image
                                source={require('./img/suggestion1_3.png')}
                                style={styles.suggestionImage}
                                resizeMode='stretch'
                            />
                            <Image
                                source={require('./img/star.png')}
                                style={{top: -180,left: 330,width:24,height:24}}
                            />
                            <Text style={styles.eventTitle}>Scenic／Event</Text>
                            
                            <View style={styles.eventDetail}>
                                <Text style={styles.eventSubtitle}>location | Type of activity | #tag</Text>
                                <Button
                                    title="View Detail>>"
                                    onPress={() => navigate('SocialChild')}
                                    style = {styles.button}
                                />
                            </View>
                        </View>
                        
                        <View style={styles.eventContent}>
                            <Image
                                source={require('./img/suggestion1_4.png')}
                                style={styles.suggestionImage}
                                resizeMode='stretch'
                            />
                            <Image
                                source={require('./img/star.png')}
                                style={{top: -180,left: 330,width:24,height:24}}
                            />
                            <Text style={styles.eventTitle}>Scenic／Event</Text>
        
                            <View style={styles.eventDetail}>
                                <Text style={styles.eventSubtitle}>location | Type of activity | #tag</Text>
                                <Button
                                    title="View Detail>>"
                                    onPress={() => navigate('SocialChild')}
                                    style = {styles.button}
                                />
                            </View>
                        </View>
                    </View>
                    
                    
                    
                    
                    
                    
                    
                </ScrollView>
                
                
            
            </View>
        );
    }
}

class HottestPlaceScreen extends React.Component {
    static navigationOptions = {
        title: '详情',
    };
    
    render() {
        return(
            <Text>Hello</Text>
        );
    }
}

class MustPlaceScreen extends React.Component {
    render() {
        return(
            <Text>Hello</Text>
        );
    }
}

class EventScreen extends React.Component {
    render() {
        return(
            <Text>Hello</Text>
        );
    }
}

class OutdoorScreen extends React.Component {
    render() {
        return(
            <Text>Hello</Text>
        );
    }
}

class OtherScreen extends React.Component {
    render() {
        return(
            <Text>Hello</Text>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //backgroundColor: '#7f8c8d',
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
        backgroundColor: '#fff',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0.3,
    },
    
    filterButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'white',
        paddingLeft: 10,
    },
    
    button: {
        marginTop: 10,
        paddingTop: 5,
        // borderBottomWidth: 5,
        // borderBottomColor: 'grey',
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        //backgroundColor: 'white',
        borderBottomWidth: 3,
        borderBottomColor: 'grey',
        
    },
    buttonText: {
        //padding: 2,
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        
    },
    
    image: {
        //width: 320,
        height: 280,
        //flex: 1,
    },
    
    //Banner
    bannerContent: {
        height:65,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        backgroundColor: '#fff',
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        //marginTop:5
        //backgroundColor: 'white',
        
    },
    
    bannerButton: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#383838',
        marginTop: 10,
        marginBottom: 5,
    },
    
    //Collections
    scrollContent: {
        //marginTop: 20,
    },
    collectionContent: {
        marginTop: 10,
        height: 705,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        backgroundColor: '#fff',
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
    collectionImage: {
        padding: 10,
        width: Dimensions.get('window').width-20,
        height: 130,
        margin: 10,
    },
    footerText: {
        fontSize:15,
        textAlign: 'center',
        padding: 10,
    },
    
    //Suggestions
    suggestionContent: {
        marginTop: 10,
        height: 650,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        backgroundColor: '#fff',
    },
    suggestionImage: {
        padding: 10,
        width: Dimensions.get('window').width-20,
        height: 180,
        margin: 10,
    },
    eventTitle: {
        fontSize:14,
        textAlign: 'left',
        paddingLeft:10,
    },
    eventSubtitle: {
        fontSize:12,
        textAlign: 'left',
        paddingLeft:10,
    },
    eventDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    tabIcon: {
        width: 25,
        height: 25,
        padding: 10,
    },
    
    
    
    
    
});

export default MainHomeScreen = StackNavigator({
    Discover: {screen: HomeScreen},
    Hottest: { screen: HottestPlaceScreen },
    Must: { screen: MustPlaceScreen },
    Event: { screen: EventScreen },
    Outdoor: { screen: OutdoorScreen },
    Other: { screen: OtherScreen },
    Banner: { screen: BannerScreen},
    Collection: { screen: CollectionScreen},
    Filter: { screen: FilterScreen},
    Detail: { screen: DetailScreen},
});

MainHomeScreen.navigationOptions = {
    tabBarLabel: 'DISCOVER',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./img/discover-icon.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
        />
    ),
};