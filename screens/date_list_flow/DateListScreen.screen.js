import React, { Component } from "react";
import { Container, Content } from 'native-base';
import { View, Text } from 'react-native';
import ListOfItems from "../../components/DateList/List.component";

export default class DatesScreen extends Component {
    static navigationOptions = {
        title: 'Saved Juicy Dates',
        headerStyle: {
            backgroundColor: '#f4871e',
        }
    };

    noDates() {
        return (
            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Text>You have no Dates...</Text>
            </View>
        )
    }

    render() {
        //stock campfire image for each date
        let stockImage = require('../../assets/images/campfire.jpg')
        let data = this.props.screenProps.data
        return (
            <Container>
                <Content>
                    {/* Using data passed from the HomeScreen, generate each list item (the date) */}
                    {
                        data.length === 0 ? this.noDates() : data.map((item, index) => <ListOfItems
                            title={`Date Number ${index}`}
                            key={index}
                            //this will display what kind of items (movie, restaurant, event) the date contains
                            description={`${Object.keys(item).slice(1, Object.keys(item).length - 1).join(', ')}`}
                            //pass data containing information about each date activity to the next screen 
                            nav={() => { this.props.navigation.navigate('DateDetails', { activities: item }) }}
                            pic={stockImage}
                        />)
                    }
                </Content>
            </Container>
        )
    }
}

