import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type"
import axios from "axios";

const initialState = {
  myFavorites: [],
  allCharactersFav: [] // ES LA COPIA PARA PODER ORDENAR O FILTRAR
};

const rootReducer = (state = initialState, action) => {

  switch(action.type){

    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case REMOVE_FAV: {
      return { ...state, myFavorites: action.payload };
    }

    case FILTER: {
        if (action.payload === "All") {
          return {
            ...state,
            myFavorites: state.allCharactersFav
          }
        }
        else {
          let allCharactersFavFilter = state.allCharactersFav.filter((character) => character.gender === action.payload)
          return {
            ...state,
            myFavorites: allCharactersFavFilter
          }
        }
    };

    case ORDER: {
      const allCharactersFavCopy = [...state.allCharactersFav]
      return{
        ...state,
        myFavorites: action.payload === "A"
          ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
          : allCharactersFavCopy.sort((a,b) => b.id - a.id)
      }
    };

    default:
      return { ...state }
  }
}

export default rootReducer;