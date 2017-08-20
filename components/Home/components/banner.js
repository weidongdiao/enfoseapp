import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper'
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    Image,
    View,
    ListView,
    TextInput,
    Dimensions,
    ScrollView,
    FlatList,
    SectionList,
    TouchableHighlight,
    Button,
    Alert,
    
} from 'react-native';

class BannerScreen extends React.Component {
    render() {
        return(
            <ScrollView style = {styles.container}>
                <View>
                    <Image
                        source = {require('../img/banner.jpeg')}
                        style = {{height: 190, width:Dimensions.get('window').width}}
                        resizeMode='stretch'
                    />
                    <Text style={styles.text}>
                        文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </Text>
                </View>
    
                <View >
                    <Image
                        source = {require('../img/banner.jpeg')}
                        style = {{height: 190, width:Dimensions.get('window').width}}
                        resizeMode='stretch'
                    />
                    <Text style={styles.text}>
                        文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                    </Text>
                </View>
    
                <View style={styles.content}>
                    <View style={styles.subContent}>
                        <Image
                            source={require('../img/suggestion1_3.png')}
                            style = {{height: 190, width:Dimensions.get('window').width,opacity: 0.6}}
                            resizeMode='stretch'
                        />
                        <View style={styles.title}>
                            <Text style={styles.subtitle}>Subtitle</Text>
                            <Text style={styles.maintitle}>Maintitle</Text>
                            <Text style={styles.price}>Price</Text>
                            <Text style={styles.tag}>#tag | #tag | #tag</Text>
                        </View>
                    </View>
                    <View style={styles.subContent}>
                        <Image
                            source={require('../img/suggestion1_3.png')}
                            style = {{height: 190, width:Dimensions.get('window').width,opacity: 0.6}}
                            resizeMode='stretch'
                        />
                        <View style={styles.title}>
                            <Text style={styles.subtitle}>Subtitle</Text>
                            <Text style={styles.maintitle}>Maintitle</Text>
                            <Text style={styles.price}>Price</Text>
                            <Text style={styles.tag}>#tag | #tag | #tag</Text>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
            
            
            
            
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
        padding: 5,
        fontSize: 12,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -140,
        
        // left: 330,
        // width:24,
        // height:24,
    },
    subtitle: {
        padding: 5,
        fontSize: 12,
    },
    maintitle: {
        padding: 5,
        fontSize: 16,
    },
    price: {
        padding: 5,
        fontSize: 12,
    },
    tag: {
        padding: 5,
        fontSize: 12,
    }
});

export default BannerScreen;
BannerScreen.navigationOptions = {
    title: 'Banner',
};