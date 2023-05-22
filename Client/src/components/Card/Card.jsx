import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const { pathname } = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) setIsFav(true);
    });
  }, [myFavorites]);

  return (
    <div className={style.flipCard}>

      <div className={style.flipCardInner}>

        <div className={style.flipCardFront}>
          <img src={image} alt="{name}" />
        </div>

        <div className={style.flipCardBack}>

          <div className={style.cardButtons}>
            <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

            {pathname !== "/favorites" && (
              <button onClick={() => onClose(id)} className={style.closeButton}>
                X
              </button>
            )}
          </div>

          <Link to={`/detail/${id}`} className={style.link}>
            <h2>NAME | {name}</h2>
            <h2>STATUS | {status}</h2>
            <h2>SPECIES | {species}</h2>
            <h2>GENDER | {gender}</h2>
            <h2>ORIGIN | {origin}</h2>
          </Link>
        </div>

      </div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
