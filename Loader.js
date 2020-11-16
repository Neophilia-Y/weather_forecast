import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Loading.. To get Weather API</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34aeeb",
        justifyContent: "flex-end",
        paddingHorizontal: 50,
        paddingVertical: 100,
    },
    text: {
        fontSize: 30,
        color: "black"
    }

})