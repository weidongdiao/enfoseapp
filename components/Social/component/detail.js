import React, { Component } from 'react';
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


class ChildSocialScreen extends React.Component {
    // static navigationOptions = {
    //     title: '详情',
    // };
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
        Alert.alert('Comment Submit!');
    }
    
    
    render() {
        return(
            <View>
                <View style={styles.header}>
                    <View style={styles.account}>
                        <Image
                            source={require('../img/male.png')}
                            style={{width:25,height:25}}
                        />
                        <Text style={{fontSize:18}}>Alex</Text>
                    </View>
                    <View style={styles.followArea}>
                        <View >
                            <TouchableHighlight onPress = {this.followClick} underlayColor = "white" >
                                <View style={styles.followButton}>
                                    <Text style={styles.followButtonText}>{this.state.isFollowed ? 'Followed' : '+Follow'}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <Image
                            source={require('../img/share.png')}
                            style={{width:25,height:25}}
                        />
                    </View>
                </View>
                
                <ScrollView style={styles.body}>
                    <View style={styles.bodyText}>
                        <Text style={styles.subtitle}>July 4th is the America National Day, in New York, beautiful firewokrs have showed on that day.</Text>
                    </View>
                    <View style={styles.bodyImage}>
                        <Image
                            source={require('../img/social_1.gif')}
                            style={{width:320, height: 220}}
                        />
                    </View>
                    <Text style={styles.time}>2017-07-04</Text>
                    <View style={styles.comment}>
                            <View style={styles.commentHeader}>
                                <View style={styles.commentAccount}>
                                    <Image
                                        source={require('../img/comment.png')}
                                        style={{width:20,height:20}}
                                    />
                                    <Text style={styles.subtitle}>Comment</Text>
                                </View>
                                <View style={styles.commentTotal}>
                                    <Text style={styles.subtitle}> Total 5 Comments</Text>
                                </View>
                            </View>
                            <View style={styles.commentBody}>
                                <Image
                                    source={require('../img/female.png')}
                                    style={{width:30,height:30}}
                                />
                                <Text style={styles.commentText}>Beautiful!</Text>
                            </View>
                            <View style={styles.commentFoot}>
                                <Image
                                    source={require('../img/male.png')}
                                    style={{width:25,height:25}}
                                />
                                <TextInput style={styles.commentBar} placeholder="Comment..."/>
                                <TouchableHighlight onPress = {this._onPressButton} underlayColor = "white" >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>Send</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.calculate}>
                                <View style={styles.footPosition}>
                                    <Image
                                        source={require('../img/like.png')}
                                        style={{width:25,height:25}}
                                    />
                                    <Text>9</Text>
                                </View>
                                <View style={styles.footPosition}>
                                    <Image
                                        source={require('../img/comment.png')}
                                        style={{width:25,height:25}}
                                    />
                                    <Text>9</Text>
                                </View>
                                <View style={styles.footPosition}>
                                    <Image
                                        source={require('../img/star.png')}
                                        style={{width:25,height:25}}
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
    button: {
        padding:5,
        // borderBottomWidth: 5,
        // borderBottomColor: 'grey',
        width: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 3,
        borderColor:'grey',
        //backgroundColor: 'white',
        // borderBottomWidth: 3,
        // borderBottomColor: 'grey',
        
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 14,
        
    },
    
    header: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        //marginRight: 10,
        borderBottomWidth: 1,
        
    },
    account: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    followArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 180,
    },
    followButton: {
        padding:5,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    followButtonText: {
        color: '#F5FCFF',
        textAlign: 'center',
        fontSize: 18,
    },
    subtitle: {
        fontSize:14,
        textAlign: 'justify',
        paddingLeft: 5,
    },
    time: {
        fontSize:12,
        textAlign: 'left',
        color: 'grey',
    },
    
    body: {
        padding: 5,
    },
    bodyText: {
        padding: 15,
    },
    
    bodyImage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    //comment
    comment: {
        paddingTop: 5,
        borderWidth: 3,
        borderColor: '#F5FCFF',
    },
    commentHeader: {
        flexDirection: 'row',
        //justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#F5FCFF',
    },
    commentAccount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    commentTotal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 120,
    },
    commentBody: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        height: 80,
        borderBottomWidth: 3,
        borderBottomColor: '#F5FCFF',
    },
    commentText: {
        paddingLeft: 20,
    },
    commentFoot: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#F5FCFF',
    },
    commentBar: {
        width: 250,
        height: 30,
        borderWidth: 2,
        borderRadius: 8,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#fff',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    calculate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footPosition: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});


export default ChildSocialScreen;
ChildSocialScreen.navigationOptions = {
    title: 'Detail',
};

