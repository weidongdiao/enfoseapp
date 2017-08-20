import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper'
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    ScrollView,
    TouchableHighlight,
    Button,
    Alert,
    
} from 'react-native';

class DetailScreen extends React.Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    
    render() {
        return(
            <ScrollView style = {styles.container}>
                <View style={styles.wrapper}>
                    <Swiper autoplay={true} >
                        <View style={styles.slide}>
                            <Image
                                source={require('../img/suggestion1_1.png')}
                                style={styles.sliderImage}
                                resizeMode='stretch'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../img/suggestion1_2.png')}
                                style={styles.sliderImage}
                                resizeMode='stretch'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../img/suggestion1_3.png')}
                                style={styles.sliderImage}
                                resizeMode='stretch'
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../img/suggestion1_4.png')}
                                style={styles.sliderImage}
                                resizeMode='stretch'
                            />
                        </View>
                    </Swiper>
                </View>
                
                <View style = {{padding: 5}}>
                    <View style={styles.header}>
                        <View style={styles.title}>
                            <Text style={styles.maintitle}>Maintitle</Text>
                            <Text style={styles.tag}>#tag | #tag | #tag</Text>
                            <View style = {{flexDirection:'row'}}>
                                <Image
                                    source={require('../img/star.png')}
                                    style={{width:12,height:12}}
                                />
                                <Text>Favourited by 4 people</Text>
                            </View>
                        </View>
                        <View style = {styles.contact}>
                            <View>
                                <Text>XXX-XXX-XXXX</Text>
                                <Text>ABC Street, New York, NY, 1000X</Text>
                            </View>
                            <View>
                                <Text>Phone</Text>
                                <Text>Address</Text>
                            </View>
                        </View>
                    </View>
    
                    <View style = {styles.suggest}>
                        <Text style={styles.subtitle}>Recommended reason</Text>
                        <Text style={styles.text}>
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </Text>
                    </View>
                    
                    <View style = {styles.deal}>
                        <Text style={styles.deal_subtitle}>Tickets / Packages</Text>
                        <View style={styles.filterContent}>
                            <Image
                                source={require('../img/suggestion1_2.png')}
                                style = {styles.image}
                                resizeMode='stretch'
                            />
                            <View style={styles.deal_title}>
                                <Text style={styles.deal_maintitle}>Maintitle</Text>
                                <Text style={styles.deal_minortitle}>Subtitle</Text>
                                <Text style={styles.tag}>#tag | #tag | #tag</Text>
                            </View>
                        </View>
                        <View style={styles.filterContent}>
                            <Image
                                source={require('../img/suggestion1_2.png')}
                                style = {styles.image}
                                resizeMode='stretch'
                            />
                            <View style={styles.deal_title}>
                                <Text style={styles.deal_maintitle}>Maintitle</Text>
                                <Text style={styles.deal_minortitle}>Subtitle</Text>
                                <Text style={styles.tag}>#tag | #tag | #tag</Text>
                            </View>
                        </View>
                    </View>
                    
    
                    <View style = {styles.suggest}>
                        <Text style={styles.subtitle}>Detail</Text>
                        <Text style={styles.text}>
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </Text>
                        <TouchableHighlight onPress = {this._onPressButton} underlayColor = "white">
                            <Text>More detail></Text>
                        </TouchableHighlight>
                    </View>
    
                    <View style = {styles.remind}>
                        <Text style={styles.subtitle}>Tips</Text>
                        <Text style={styles.text}>
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </Text>
                    </View>
    
                    <View style = {styles.deal}>
                        <Text>Popular recommendation</Text>
                        <View style={styles.filterContent}>
                            <Image
                                source={require('../img/suggestion1_3.png')}
                                style = {styles.image}
                                resizeMode='stretch'
                            />
                            <View style={styles.deal_title}>
                                <Text style={styles.deal_maintitle}>Maintitle</Text>
                                <Text style={styles.deal_minortitle}>Subtitle</Text>
                                <Text style={styles.tag}>#tag | #tag | #tag</Text>
                            </View>
                        </View>
                        <View style={styles.filterContent}>
                            <Image
                                source={require('../img/suggestion1_4.png')}
                                style = {styles.image}
                                resizeMode='stretch'
                            />
                            <View style={styles.deal_title}>
                                <Text style={styles.deal_maintitle}>Maintitle</Text>
                                <Text style={styles.deal_minortitle}>Subtitle</Text>
                                <Text style={styles.tag}>#tag | #tag | #tag</Text>
                            </View>
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
    //Slider
    wrapper: {
        height: 150,
        //flex:1,
        backgroundColor: 'grey',
        marginBottom: 20,
    },
    slide: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderImage: {
        width: Dimensions.get('window').width,
        height: 150,
        //flex: 1,
    },
    
    image: {
        width: 200,
        height: 120
    },
    text: {
        padding: 5,
        fontSize: 12,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
    },
    subtitle: {
        padding: 5,
        fontSize: 16,
    },
    maintitle: {
        padding: 5,
        fontSize: 20,
    },
    deal_title: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding:5,
    },
    deal_maintitle: {
        paddingLeft: 5,
        fontSize: 14,
    },
    deal_subtitle: {
        padding: 5,
        fontSize: 16,
        
    },
    deal_minortitle: {
        paddingLeft: 5,
        fontSize: 12,
        top: -15,
    },
    price: {
        padding: 5,
        fontSize: 12,
    },
    tag: {
        padding: 5,
        fontSize: 12,
    },
    contact: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    header:{
        padding:5,
    },
    suggest: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 3,
        borderTopColor: 'grey',
        borderBottomWidth: 3,
        borderBottomColor: 'grey',
        padding:10,
        marginTop: 15,
        marginBottom: 15,
    },
    remind: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'grey',
        padding:10,
        marginBottom: 15,
    },
    deal: {
        padding:5,
        alignItems: 'center',
    },
    filterContent: {
        padding: 10,
        flexDirection:'row'
    },
});


export default DetailScreen;
DetailScreen.navigationOptions = {
    title: 'Detail',
};
