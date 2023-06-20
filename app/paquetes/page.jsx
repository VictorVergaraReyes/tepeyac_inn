import React from "react";
import Image from "next/image";
function Paquetes(){
  return(
    <div className="bg-dark-subtle">
      <h1 className="text-center">Paquetes</h1>
      <div className="container">
        <h1>Paquetes de boda</h1>
        <div className="row align-items-start">
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      </div>

      <div className="container">
        <h1>Paquetes de boda</h1>
        <div className="row align-items-start">
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4" styles={`{width: 18rem}`}>
          <Image src="/logo.jpg" className="card-img-top" width={200} height={150} alt="paquete 1"/>
          <div className="card-body">
            <h5 className="card-title">Paquete 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Paquetes