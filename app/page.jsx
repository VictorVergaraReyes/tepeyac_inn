import React from "react";
import styles from "./page.module.css"

export default function IndexPage(){
  return(
    <main  className={styles.main}>
      <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>
      {/* Banner */}
        <section>
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
            
        <section className="row d-flex m-4">
          <h1 className="text-center">Acerca de nosotros</h1>
          <div className="">
            <p className="slogan">
            En Salón Tepeyac inn  tenemos amplia experiencia en nuestro servicio confía en nosotros no te defraudaremos 
Cada evento que organizamos es como si fuera nuestro!
            </p>
          </div>
        </section>
    </main>
  )
}