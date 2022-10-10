import { useState } from 'react';
import { View, Text, Image } from 'react-native'

import Estrela from './Estrela';
import { StyleSheet } from 'react-native';

export default function Estrelas({ 
    quantidade: quantidadeAntiga, 
    editavel = false,
    grande = false,
}) {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga);
    
    const RenderEstrela = () => {
        const listaEstrelas = [];
        for (let i = 1; i <= 5; i++) {
                listaEstrelas.push(
                <Estrela 
                key={i}
                onPress={( ) => setQuantidade(i+ 1)} 
                desabilitada={!editavel}
                preenchida= {i < quantidade}
                grande={grande}
                /> 
                )
            
        }
        return listaEstrelas;
    }
    


    
    return (
        <View style={estilos.estrelas}>
            <RenderEstrela />
        </View>
    )
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
})