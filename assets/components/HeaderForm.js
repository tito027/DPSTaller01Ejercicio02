import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native';
import { Title, Subheading  } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import InputSpinner from "react-native-input-spinner";

export default function HeaderForm(props) {
    const {setSizeN, setCoffeeN, setPayMethodN, setQuantityN} = props
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState(1)
    const [coffee, setCoffee] = useState(2)
    const [payMethod, setPayMethod] = useState(1)

    return (
        <View style={styles.container}>
            <Title style={styles.title}>StarBosco APP</Title>
            <View>
                <Subheading style={styles.text}>Seleccione el tipo de su café</Subheading>
                <Picker
                    style={[styles.picker,{marginBottom:10}]}
                    selectedValue={coffee}
                    onValueChange={(itemValue, itemIndex) => {
                        setCoffeeN(itemValue)
                        setCoffee(itemValue)
                    }}
                >
                    <Picker.Item label='Mocha' value={2} />
                    <Picker.Item label='Te chai' value={2.5} />
                    <Picker.Item label='Americano' value={1.5} />
                    <Picker.Item label='Frapper' value={3} />
                </Picker>
                <Subheading style={styles.text}>Seleccione el tamaño de su café</Subheading>
                <Picker
                    style={[styles.picker,{marginBottom:10}]}
                    selectedValue={size}
                    onValueChange={(itemValue, itemIndex) =>{
                        setSizeN(itemValue)
                        setSize(itemValue)
                    }}
                >
                    <Picker.Item label='Short (8 onz.)' value={1} />
                    <Picker.Item label='Tall (12 onz.)' value={1.5} />
                    <Picker.Item label='Grande (16 onz.)' value={2} />
                </Picker>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Subheading style={styles.text}>Forma de pago</Subheading>
                        <Picker
                            style={styles.picker}
                            selectedValue={payMethod}
                            onValueChange={(itemValue, itemIndex) =>{
                                setPayMethodN(itemValue)
                                setPayMethod(itemValue)
                            }}
                        >
                            <Picker.Item label='Efectivo' value={1} />
                            <Picker.Item label='Tarjeta credito' value={2} />
                        </Picker>
                    </View>
                    <View style={styles.item}>
                        <Subheading style={styles.text}>Cantidad</Subheading>
                        <InputSpinner
                            color='white'
                            arrows={true}
                            colorLeft='#3b83bd'
                            colorRight='#3b83bd'
                            colorPress='transparent'
                            textColor='white'
                            max={100}
                            min={1}
                            step={1}
                            colorMax='white'
                            colorMin='white'
                            value={quantity}
                            onChange={(num) => {
                                setQuantityN(num);
                                setQuantity(num);
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#3b83bd',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        padding: 20,
        paddingTop: 40
    },
    title: {
        color: 'white',
        textAlign: 'center'
    },
    text: {
        color: 'white'
    },
    picker: {
        color: 'black',
        backgroundColor: '#f3f3f3',
        width: '100%',
        height: 40,
        marginTop: 10
    },
    row: {
        flexDirection: 'row'
    },
    item: {
        width: '50%',
        padding: 10
    }
    
})