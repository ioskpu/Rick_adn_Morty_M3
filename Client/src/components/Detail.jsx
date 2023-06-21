import React, { useState, useEffect } from 'react'
import style from "../styles/Detail.module.css"
import { useParams } from "react-router-dom";
import axios from 'axios'

const Detail = () => {
   const {id}= useParams()
   const [character, setCharacter] = useState({})

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
         return setCharacter({});
   }, [id]);

   return (
      <div className={style.container}>
         <div className={style.imgContainer}>
            <img className={style.img} src={character.image} alt={character.name} />
         </div>
         <div className={style.detailsContainer}>
         <h1>Detalles</h1>
         <h2>Nombre ||{character.name}</h2>
         <h2>Status ||{character.status}</h2>
         <h2>Especies ||{character.species}</h2>
         <h2>Genero||{character.gender}</h2>
         <h2>Origen ||{character.origin?.name}</h2>
         </div>

         

      </div>
      );
   };

export default Detail;