import React from 'react';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { carreagaProdutores } from '../../../services/carregaDados';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';
import { StyleSheet, Text } from 'react-native';


export default function Produtores({ topo : Topo}){
    const [produtores,lista] = useProdutores();
    
    
    //o hook useProdutores retorna um array com dois elementos e substitui o código abaixo
    // const [produtores, setProdutores] = useState([]);
    // const [lista, setLista] = useState([]);
    // //hooks permitem que você use o estado e outras funcionalidades do React sem escrever uma classe
    
    // useEffect(() => {
    //   const retorno =  carreagaProdutores();
    //     setProdutores(retorno.lista);
    //     setLista(retorno.lista);
    // },[]);

    const TopoLista = () => {
        return(
            <>
                <Topo/>
                <Text style={estilos.titulo}>{produtores}</Text>
             </>

        );
    }
    
    return (
        <FlatList 
            data={lista}
            keyExtractor={item => item.nome}
            renderItem={({item}) => <Produtor {...item} /> }//descontruindo o item e passando para o componente Produtor cada parametro
            
            ListHeaderComponent={TopoLista}

        />
    )
}


const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
        marginTop: 10,
        MarginHorizontal: 10,
        color : '#464646'
    }
})