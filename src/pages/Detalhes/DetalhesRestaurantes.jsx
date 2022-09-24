import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DetalhesRestaurantes() {

    const [descricao, setDescricao] = useState([]);
    const [distancia, setDistancia] = useState();
    const [endereco, setEndereco] = useState([]);
    const [imagem, setImagem] = useState([]);
    const [nome, setNome] = useState();
    const [nota, setNota] = useState();
    const [tempo_medio, setTempoMedio] = useState();
    const [valor_entrega, setValorEntrega]= useState();

    const location = useLocation();

    useEffect(() => {
        getRestaurantes(location.state.id).then((response) => {
            setDescricao(response.nome)
            setDistancia(response.distancia);
            setEndereco(response.endereco);
            setImagem(response.imagem);
            setNome(response.nome);
            setNota(response.nota);
            setTempoMedio(response.tempo_medio);
            setValorEntrega(response.valor_entrega);
            setLoading(false);
        })
    }, []);

    return (
        <Container class="detalhes">
            
        </Container>
    );

}

import "./styles.css";