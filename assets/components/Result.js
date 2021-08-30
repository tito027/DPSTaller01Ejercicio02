import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Title  } from 'react-native-paper'

export default function Result(props) {
    const {quantity, size, coffee, payMethod, total, errorMessage} = props
    return(
        <View style={styles.content}>
            {total && (
                <View>
                    <Title style={{marginBottom:20}}>Resumen</Title>
                    <DataResult
                    title="Cantidad:"
                    value={`${quantity}`}
                    />
                    <DataResult
                        title="Tamaño:"
                        value={`${size}`}
                    />
                    <DataResult 
                        title="Tipo de café:" 
                        value={`${coffee}`}
                        />
                    <DataResult 
                        title="Forma de pago:"
                        value={`${payMethod.label}`}
                        /> 
                    <DataResult 
                        title="Descuento:"
                        value={`${payMethod.value == 1?'15%':'5%'}`}
                    />
                    <DataResult 
                        title="Total a pagar:"
                        value={`$${total}`}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult(props) {
    const {title, value} = props;

    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        margin: 40
    },
    boxResult: {
        padding: 30
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20
    }
  });