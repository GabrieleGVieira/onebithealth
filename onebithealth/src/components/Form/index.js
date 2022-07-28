import React, {useState} from "react"
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration, 
    Keyboard, 
    Pressable
} from "react-native"
import ResultIMC from './ResultIMC/'
import styles from "./style"

export default function Form(props) {

const [height,setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha a altura e o peso")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
}

function validatorImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
        return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc(("Preencha a altura e o peso"))
}

function verificationImc() {
    if(imc == null){
        Vibration.vibrate()
        setErrorMessage("Campo obrigatório")
        return
    }
}
    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}> 
                    {errorMessage} 
                </Text>
                <TextInput 
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75" 
                    keyboardType="numeric"/>
                <Text style={styles.formLabel}>
                    Peso
                </Text>
                <Text style={styles.errorMessage}> 
                    {errorMessage} 
                </Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.890" 
                keyboardType="numeric"/>
                <TouchableOpacity 
                style={styles.formButton}
                onPress={() => validatorImc()}>
                    <Text style={styles.textFormButton}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View> 
            <ResultIMC 
            messageResultImc={messageImc}
            resultImc={imc}/>
        </Pressable>
    )
}