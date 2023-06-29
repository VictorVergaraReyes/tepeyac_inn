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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam sunt necessitatibus similique quia error quaerat libero iusto perspiciatis ea! Voluptatibus eligendi facilis molestias non et culpa voluptate quidem. Tenetur quod aspernatur animi, sint eveniet aperiam provident repellat qui et fuga facilis? Exercitationem aperiam cum magnam ipsum, eligendi non quas!
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam sunt necessitatibus similique quia error quaerat libero iusto perspiciatis ea! Voluptatibus eligendi facilis molestias non et culpa voluptate quidem. Tenetur quod aspernatur animi, sint eveniet aperiam provident repellat qui et fuga facilis? Exercitationem aperiam cum magnam ipsum, eligendi non quas!
          </div>
        </section>
        <section className="row">
          <h2></h2>
          <div className="col-12 col-md-6 col-md-6">
          <h2>Graduaciones</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam sunt necessitatibus similique quia error quaerat libero iusto perspiciatis ea! Voluptatibus eligendi facilis molestias non et culpa voluptate quidem. Tenetur quod aspernatur animi, sint eveniet aperiam provident repellat qui et fuga facilis? Exercitationem aperiam cum magnam ipsum, eligendi non quas!
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam sunt necessitatibus similique quia error quaerat libero iusto perspiciatis ea! Voluptatibus eligendi facilis molestias non et culpa voluptate quidem. Tenetur quod aspernatur animi, sint eveniet aperiam provident repellat qui et fuga facilis? Exercitationem aperiam cum magnam ipsum, eligendi non quas!
          </div>
        </section>
      </div>
    </main>
  )
}

