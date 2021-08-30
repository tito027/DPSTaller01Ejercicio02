import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import HeaderForm from './assets/components/HeaderForm'
import Result from './assets/components/Result'
import FooterButton from './assets/components/FooterButton'

export default function App() {
  const [itemsSize, setItemsSize] = useState([
    {label: 'Short (8 onz.)', value: 1},
    {label: 'Tall (12 onz.)', value: 1.5},
    {label: 'Grande (16 onz.)', value: 2}
  ])
  const [itemsCoffee, setItemsCoffee] = useState([
    {label: 'Mocha', value: 2},
    {label: 'Te chai', value: 2.5},
    {label: 'Americano', value: 1.5},
    {label: 'Frapper', value: 3}
  ])
  const [itemsPayMethods, setItemsPayMethods] = useState([
    {label: 'Efectivo', value: 1},
    {label: 'Tarjeta credito', value: 2}
  ])
  const [quantityN, setQuantityN] = useState(1)
  const [sizeN, setSizeN] = useState(1)
  const [coffeeN, setCoffeeN] = useState(2)
  const [payMethodN, setPayMethodN] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState(null)
  const [coffee, setCoffee] = useState(null)
  const [payMethod, setPayMethod] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const calculate = () =>{
    reset();
    if (!quantityN) {
      setErrorMessage('Selecciona una cantidad adecuada')
    } else if (!sizeN) {
      setErrorMessage('Selecciona un tamaño adecuado')
    } else if (!coffeeN) {
      setErrorMessage('Selecciona un tipo de café adecuado')
    } else if (!payMethodN) {
      setErrorMessage('Selecciona una forma de pago adecuada')
    } else {
      const discount = (payMethodN == 1)?0.15:0.05
      const calculateTotal = (quantityN * (coffeeN + sizeN))*(1 - discount)
      setTotal(
        calculateTotal.toFixed(2)
      )
      setQuantity(quantityN)
      setSize(itemsSize.find(x => x.value == sizeN).label)
      setCoffee(itemsCoffee.find(x => x.value == coffeeN).label)
      setPayMethod({
        value: payMethodN,
        label: itemsPayMethods.find(x => x.value == payMethodN).label
      })
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <HeaderForm
        setSizeN={setSizeN}
        setCoffeeN={setCoffeeN}
        setPayMethodN={setPayMethodN}
        setQuantityN={setQuantityN}
      />
      <Result
        quantity={quantity}
        size={size}
        coffee={coffee}
        payMethod={payMethod}
        total={total}
        errorMessage={errorMessage}
      />
      <FooterButton
        calculate={calculate}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 20
  }
})