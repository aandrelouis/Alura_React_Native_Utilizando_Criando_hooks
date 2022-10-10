import { TouchableOpacity, Image } from 'react-native'

import estrela from '../../assets/estrela.png'
import estrelaVazia from '../../assets/estrelaCinza.png'
import { StyleSheet } from 'react-native'



export default function Estrela({ onPress, desabilitada = true, preenchida, grande = false }) {
    const getImagem = () => {
        if (preenchida) {
            return estrela;
        } else {
            return estrelaVazia;
        }
    }

    const estilos = estilosFuncao(grande);
    
    return <TouchableOpacity 
        onPress={onPress}
        disabled={desabilitada}
        >

        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
}


const estilosFuncao = (grande) => StyleSheet.create({    
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
})