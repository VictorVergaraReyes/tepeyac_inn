import Navigation from "@/components/Navigation"
import styles from "./page.module.css"
import Image from "next/image"

export default function EventosPage(){
  return(
    <main className={styles.main}>
      <Navigation></Navigation>
      <h1 className="text-center">Eventos</h1>
      <div className="container">
        <section className="row">
          <div className="col-12 col-md-6 col-md-6">
            <h2>XV años</h2>
            En nuestro salón de fiestas, entendemos lo importante que es para ti celebrar tus XV años, un momento lleno de ilusión y significado. Queremos ser parte de este capítulo especial de tu vida, brindándote un espacio excepcionalmente diseñado y un servicio dedicado para que tus sueños se hagan realidad. 
          </div>
          <div className="col-12 col-md-6 col-md-6">
            <Image src={"/imagenes/XV.svg"} width={300} height={200} alt="quince años"/>
          </div>
        </section>
        <section className="row">
          <div className="col-12 col-md-6 col-md-6">
            <Image src={"/imagenes/wedding.svg"} width={300} height={200} alt="boda"/>
          </div>
          <div className="col-12 col-md-6 col-md-6">
          <h2>Bodas</h2>
          Nos complace ofrecerte la experiencia perfecta para hacer realidad el día más especial de tu vida: tu boda. Nos enorgullece brindarte un entorno encantador y elegante, diseñado para crear recuerdos inolvidables. Desde la ceremonia hasta la recepción, nuestro equipo dedicado estará a tu disposición para hacer que cada detalle sea impecable.
          </div>
        </section>
        <section className="row">
          <h2></h2>
          <div className="col-12 col-md-6 col-md-6">
          <h2>Graduaciones</h2>
          Queremos ser parte de esta ocasión tan especial y ofrecerte un espacio excepcional para que celebres tu logro junto a tus seres queridos. Nuestro salón está diseñado para brindarte una experiencia inolvidable. Con una elegante decoración y una atmósfera festiva, te garantizamos un ambiente único para celebrar tu éxito. 
          </div>
          <div className="col-12 col-md-6 col-md-6">
          <Image src={"/imagenes/graduacion2.svg"} width={300} height={200} alt="graduacion"/>
          </div>
        </section>
        <section className="row">
          <div className="col-12 col-md-6 col-md-6">
          <Image src={"/imagenes/bautizo.svg"} width={300} height={200} alt="bautizo"/>
          </div>
          <div className="col-12 col-md-6 col-md-6">
          <h2>Comuniones, bautizos</h2>
          Comprendemos la importancia y el significado especial del bautizo de tu ser querido. Es un momento de alegría y bendición que merece ser celebrado en un entorno acogedor y encantador. Te invitamos a confiar en nuestro equipo para organizar una celebración inolvidable que refleje la solemnidad y la alegría de este evento tan significativo.
          </div>
        </section>
      </div>
    </main>
  )
}

