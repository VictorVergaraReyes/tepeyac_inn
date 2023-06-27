import React from "react";
import styles from "./page.module.css"
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Head from "next/head";
import { Parisienne } from '@next/font/google'

const parisienne=Parisienne({
  weight:['400'],
  subsets:['latin'],
  display:'swap'
})

export default function IndexPage(){
  return(
    <div  className={styles.main}>
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
          <div className={styles.textoBanner}>
            <p className={parisienne.className}>Tepeyac inn </p>
          </div> 
        </section>
            
        <section className={styles.acerca}>
          <h1 className="text-center">Acerca de nosotros</h1>
          <div className="row align-items-center">
            <p>
            En Salón Tepeyac inn  tenemos amplia experiencia en nuestro servicio confía en nosotros no te defraudaremos 
Cada evento que organizamos es como si fuera nuestro!
            </p>
          </div>
        </section>
        {/* Carrusel */}
        <Carousel></Carousel>   
    </div>
  )
}