import { useReducer, useMemo } from "react";
import { TouchableOpacity,useState, Image, View } from "react-native"
import Estrelas from "../../../components/Estrelas"
import { StyleSheet, Text } from "react-native";


const distanciaEmMetros = (distancia) => {
    return `${distancia}m`;
}


export default function Produtor({nome, imagem, distancia, estrelas}) {
    //const [selecionado, setSelecionado] = useState(false);

    //forma de usar o reducer, mas é  a mesma coisa que o useState
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
     );
    
  

    //vai armazenar em memoria e só atualiza quando distancia for alterada
    const distanciaTexto =  useMemo(() => distanciaEmMetros(distancia), [distancia]);
    //usecallback é usado para funções, muito parecido com o useMemo
    


    return (
        <TouchableOpacity 
        style={estilos.cartao}
        onPress={inverterSelecionado}
        >
            <Image 
                source={imagem} 
                style={estilos.imagem} 
                acessibilityLabel={nome} />
            
            <View style={estilos.informacoes}>
                
                <View>
                    <Text style={estilos.nome}>{nome}</Text>
                    <Estrelas 
                        quantidade={estrelas}
                        grande={selecionado}
                        editavel={selecionado}
                    />
                </View>

                <Text style={estilos.distancia}>{distanciaTexto} km</Text>
            </View>

        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",

        // Android
        elevation: 4,

        // iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    },

})