import React, { useState } from 'react'
import Card from "../Card/Card"
import { connect, useDispatch } from 'react-redux';
import style from "./Favorites.module.css"
import { orderCards, filterCards } from '../../redux/action';

function Favorites({ myFavorites }) {

  const [aux, setAux] = useState(false)

  const dispatch = useDispatch()

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
    <div className={style.FavContainer}>

      <div className={style.favSelect}>
        <select name="Order" onClick={handleOrder} className='btn'>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select name="Filter" onClick={handleFilter} className='btn'>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
          <option value="All">Todos</option>
        </select>
      </div>

      {myFavorites?.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
          />
        );
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);