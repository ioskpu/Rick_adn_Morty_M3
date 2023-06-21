import React from "react";
import Card from "./Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeFav, orderCards, filterCards } from "../redux/action";
import { useState } from "react";


const Favorites = () => {
  
  const {myFavorites} = useSelector((state) => state)
  
  const dispatch = useDispatch();
  
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderCards(e.target.value))
    setAux(!aux)
  }

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filterCards(e.target.value))
  }


  return (
    <div>

      <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>Selecione el orden</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>Seleccione el Filtro</option>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
        <option value="allCharacters">Todos los personajes</option>
      </select> 


      {myFavorites &&
        myFavorites.map((element, index) => {
          return (
            <Card
              key={index}
              id={element.id}
              name={element.name}
              status={element.status}
              species={element.species}
              gender={element.gender}
              origin={element.origin.name}
              image={element.image}
            ></Card>
          );
        })}
    </div>
  );
};

function mapState(state) {
  return {
    myFavorites: state.myFavorites,
  };
};

function mapDispatch(d) {
  return {
    removeFav: (id) => d(removeFav(id)),
  };
};

export default connect(mapState, mapDispatch)(Favorites);