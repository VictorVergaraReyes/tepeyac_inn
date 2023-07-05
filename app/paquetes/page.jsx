import Image from "next/image";
import Navigation from "@/components/Navigation";
import styles from "./page.module.css";
function Paquetes(){
  return(
    <div className={styles.main}>
      <Navigation></Navigation>
      <div className="container mt-4 mb-4">
        <h1>Paquetes de boda</h1>
        <div className="row align-items-start">
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
          <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <h1>Paquetes de XV años</h1>
        <div className="row align-items-start">
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
          <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
        </div>
      </div>

      <div className="container mt-4">
        <h1>Paquetes graduaciones</h1>
        <div className="row align-items-start">
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
          <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Paquetes