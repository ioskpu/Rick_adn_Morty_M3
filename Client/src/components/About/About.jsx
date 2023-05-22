import style from "./About.module.css"
import rymabout from "../../assets/miimagen.jpg"

function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutSpec}>
        <h2>NOMBRE</h2>
        <h3>Luis Corales</h3>        
        
        <h2>ORIGIN</h2>
        <h3>Venezuela</h3>
        <h6>Estdiante de M2 soyHenry</h6>
      </div>
      <div className={style.aboutImg}>
        <img src={rymabout} alt='Yo' />
      </div>
    </div>
  );
}

export default About;