import { useState, useEffect} from 'react'

import { carreagaProdutores } from '../services/carregaDados';


export default function useProdutores() {
    const [produtores, setProdutores] = useState([]);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno =  carreagaProdutores();
          setProdutores(retorno.Produtores);
          setLista(retorno.lista);
      },[]);


return [produtores, lista]


}