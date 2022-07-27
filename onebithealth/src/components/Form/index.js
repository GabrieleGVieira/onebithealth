import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultIMC from './ResultIMC/'

export default function Form(props) {

const [height,setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha a altura e o peso")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validatorImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc(("Preencha a altura e o peso"))

}
    return(
        <View>
            <View>
            <Text>Altura</Text>
            <TextInput 
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75" 
            keyboardType="numeric"/>
            <Text>Peso</Text>
            <TextInput
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.890" 
            keyboardType="numeric"/>
            <Button
            onPress={() => validatorImc()}
            title={textButton} />
            </View> 
            <ResultIMC 
            messageResultImc={messageImc}
            resultImc={imc}/>
        </View>
    )
}