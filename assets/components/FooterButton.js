import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button  } from 'react-native-paper'

export default function FooterButton(props) {
    const {calculate} = props
    return(
        <View style={styles.container}>
            <Button 
                style={styles.button} 
                icon="calculator" 
                color='#3b83bd' 
                mode="outlined"
                onPress={calculate}
            >
                Calcular
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: 25,
        borderColor: '#3b83bd',
    }
})