import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';

class TopNav extends Component{

    render(){
        return(
            <View style={styles.nav}>
                <Image src></Image>
                <Text>SpMedGroup</Text>
            </View>
        )
        
    }
}
        const styles = StyleSheet.create({
            nav: {
                backgroundColor: 'black',
                height: 30,
                width: 200,
                color: 'white'
            }
        })
                

export default TopNav;