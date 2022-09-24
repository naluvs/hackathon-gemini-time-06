import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import "./style.css";
import CategoriasPage from "../Categorias";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    getRestaurantes(location.state.id).then((response) => {
      setNomeCategoria(response.categoria)
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
    })
  }, []);

  return (
    <Container class="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Baratinho <span>(</span>$ <span>$ $ $ $)</span>
        </Typography>
      </div>
      {restaurantesBaratinho?.map(restaurante => (
        <div key={restaurante.id} class="restaurante">
          <div>
          <img
            src={restaurante.imagem}
            alt={restaurante.name}
            className="imgRestaurante"
          />
            </div>
          <div class="infos">
            <p class='nome'>{restaurante.nome}</p>
            <p class='nota'>{restaurante.nota}</p>
            <p class='distancia'>{restaurante.distancia}</p>
            <p class= 'tempo_medio'>{restaurante.tempo_medio}</p>
            <p class='valor_entrega'>{restaurante.valor_entrega}</p>
          </div>
        </div>
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No preço <span>(</span>$ $ $ <span>$ $)</span>
        </Typography>
      </div>
      {restaurantesNoPreco?.map(restaurante => (
        <div key={restaurante.id}>
          {restaurante.nome}
        </div>
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena <span>(</span>$ $ $ $ $ <span>)</span>
        </Typography>
      </div>
      {restaurantesCaro?.map(restaurante => (
        <div key={restaurante.id}>
          {restaurante.nome}
        </div>
      ))}
    </Container>
  )
}

export default RestaurantesPage;