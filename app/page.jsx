import React from "react";
import styles from "./page.module.css"
import Navigation from "@/components/Navigation";

export default function IndexPage(){
  return(
    <body  className={styles.main}>
      <Navigation></Navigation>
      <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>
      {/* Banner */}
        <section className={styles.banner}>
        <div style={{
           backgroundImage: `url(${"/imagenes/banner.jpg"})`,
           backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
           height: '100vh',
           opacity:0.3
           }}>            
        </div>
          <div className="position-absolute top-50 start-50 translate-middle">
            <p className="text-white fs-1 text-center">Contenido del banner </p>
          </div> 
        </section>
            
        <section className={styles.acerca}>
          <h1 className="text-center">Acerca de nosotros</h1>
          <div className="row align-items-center">
            <p className={styles.slogan}>
            En Salón Tepeyac inn  tenemos amplia experiencia en nuestro servicio confía en nosotros no te defraudaremos 
Cada evento que organizamos es como si fuera nuestro!
            </p>
          </div>
        </section>
    </body>
  )
}