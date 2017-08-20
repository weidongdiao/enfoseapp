import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
    StyleSheet,
    Platform,
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


class FilterScreen extends React.Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style = {styles.container}>
                <View style = {styles.content}>
                    <View >
                        <TextInput style = {styles.searchBar} placeholder="Search..." />
                    </View>
                </View>
                <View style = {styles.filter}>
                    <TouchableHighlight onPress = {this._onPressButton} underlayColor = "white">
                        <Text>Type</Text>
                    </TouchableHighlight>
                    <Text>|</Text>
                    <TouchableHighlight onPress = {this._onPressButton} underlayColor = "white">
                        <Text>Filter</Text>
                    </TouchableHighlight>
                    <Text>|</Text>
                    <TouchableHighlight onPress = {this._onPressButton} underlayColor = "white">
                        <Text>Sort</Text>
                    </TouchableHighlight>
                </View>
                
                <ScrollView >
                    <TouchableHighlight onPress = {() => navigate('Detail')} underlayColor = "white">
                        <View style={styles.filterContent}>
                            <Image
                                source={require('../img/suggestion1_3.png')}
                                style = {styles.image}
                                resizeMode='stretch'
                            />
                            <View style={styles.title}>
                                <Text style={styles.maintitle}>Maintitle</Text>
                                <Text style={styles.subtitle}>Subtitle</Text>
                                <Text style={styles.tag}>#tag | #tag | #tag</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    
                    <View style={styles.filterContent}>
                        <Image
                            source={require('../img/suggestion1_2.png')}
                            style = {styles.image}
                            resizeMode='stretch'
                        />
                        <View style={styles.title}>
                            <Text style={styles.maintitle}>Maintitle</Text>
                            <Text style={styles.subtitle}>Subtitle</Text>
                            <Text style={styles.tag}>#tag | #tag | #tag</Text>
                        </View>
                    </View>
                    <View style={styles.filterContent}>
                        <Image
                            source={require('../img/suggestion1_4.png')}
                            style = {styles.image}
                            resizeMode='stretch'
                        />
                        <View style={styles.title}>
                            <Text style={styles.maintitle}>Maintitle</Text>
                            <Text style={styles.subtitle}>Subtitle</Text>
                            <Text style={styles.tag}>#tag | #tag | #tag</Text>
                        </View>
                    </View>
                    <View style={styles.filterContent}>
                        <Image
                            source={require('../img/suggestion1_2.png')}
                            style = {styles.image}
                            resizeMode='stretch'
                        />
                        <View style={styles.title}>
                            <Text style={styles.maintitle}>Maintitle</Text>
                            <Text style={styles.subtitle}>Subtitle</Text>
                            <Text style={styles.tag}>#tag | #tag | #tag</Text>
                        </View>
                    </View>
                    <View style={styles.filterContent}>
                        <Image
                            source={require('../img/suggestion1_3.png')}
                            style = {styles.image}
                            resizeMode='stretch'
                        />
                        <View style={styles.title}>
                            <Text style={styles.maintitle}>Maintitle</Text>
                            <Text style={styles.subtitle}>Subtitle</Text>
                            <Text style={styles.tag}>#tag | #tag | #tag</Text>
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
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: '#fff',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0.3,
    },
    
    filter: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
    },
    
    filterContent: {
        padding: 10,
        flexDirection:'row'
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
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    subtitle: {
        paddingLeft: 5,
        top: -30,
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


export default FilterScreen;
FilterScreen.navigationOptions = {
    title: 'Entertainment Food',
};
