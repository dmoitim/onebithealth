import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "../ResultIMC";

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState('Preencha o peso e a altura');
    const [imc, setIMC] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcCalculator() {
        return setIMC((weight / (height * height)).toFixed(2));
    }

    function validationImc() {
        if (weight !== null && height !== null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC('Seu IMC é igual a');
            setTextButton('Calcular novamente');
            return;
        }

        resetToInitialState()
    }

    function resetToInitialState() {
        setIMC(null);
        setMessageIMC('Preencha o peso e a altura');
        setTextButton('Calcular');
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric" />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 75.365"
                    keyboardType="numeric" />

                <Button
                    title={textButton}
                    onPress={() => validationImc()}
                />
            </View>

            <ResultIMC resultIMC={imc} messageResultIMC={messageIMC} />
        </View>
    );
}