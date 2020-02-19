import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardWrapper}>{props.children}</View>
    )
}
const styles = StyleSheet.create({
    cardWrapper:{
        height:50,
        margin:10,
        borderWidth:3,
        borderRadius:50,
        borderColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    }

});


export { Card };