import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "../ResultIMC";

export default function Form() {
    // Adicionei a linha abaixo para compilar
    const [imc, messageIMC] = [];

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex: 1.75"
                    keyboardType="numeric" />

                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex: 75.365"
                    keyboardType="numeric" />
                
                <Button
                    title="Calcular IMC"
                />
            </View>

            <ResultIMC resultIMC={imc} messageResultIMC={messageIMC} />
        </View>
    );
}