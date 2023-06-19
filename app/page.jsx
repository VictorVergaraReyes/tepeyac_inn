import React from "react";

export default function IndexPage(){
  return(
    <main>
        <div style={{
           backgroundImage: `url(${"/header_salon.jpg"})`,
           backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
           height: '100vh'
           }}>
            <div className="position-absolute top-50 start-50 translate-middle">
              <p className="text-white fs-1">Contenido del banner </p>
            </div>
          
        </div>
        <h1 className="text-center">Quienes somos</h1>
        <div className="col-12">Imagen grande con slogan</div>
        <main>
        <div className="col-12">
          <p>
            <h2>Descripcion de el salón</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, illum deleniti! Qui officia sapiente atque ratione odit reprehenderit asperiores adipisci amet, dolorem iusto quis molestiae necessitatibus. Quia assumenda velit nam tenetur omnis ad hic rem incidunt provident delectus nobis laborum odio quos beatae facere, veniam repellat, minima iure odit amet!</p>
          </p>
        </div>
        <div className="row">
          <p className="col-12 col-md-6 col-lg-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam earum, alias ex vitae quibusdam nulla, sit excepturi voluptate molestiae similique enim fuga dolorum laborum nisi! Harum, odit excepturi atque mollitia quod eos sed aut magni, laborum asperiores fuga eligendi illo hic, adipisci unde. Suscipit neque nemo repellendus sint cumque minus!
          </p> 
          <div className="col-12 col-md-6 col-lg-6">
            Imagen
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            Imagen
          </div>
          <p className="col-12 col-md-6 col-lg-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam earum, alias ex vitae quibusdam nulla, sit excepturi voluptate molestiae similique enim fuga dolorum laborum nisi! Harum, odit excepturi atque mollitia quod eos sed aut magni, laborum asperiores fuga eligendi illo hic, adipisci unde. Suscipit neque nemo repellendus sint cumque minus!
          </p> 
        </div>
        <div className="row">
          <p className="col-12 col-md-6 col-lg-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam earum, alias ex vitae quibusdam nulla, sit excepturi voluptate molestiae similique enim fuga dolorum laborum nisi! Harum, odit excepturi atque mollitia quod eos sed aut magni, laborum asperiores fuga eligendi illo hic, adipisci unde. Suscipit neque nemo repellendus sint cumque minus!
          </p> 
          <div className="col-12 col-md-6 col-lg-6">
            Imagen
          </div>
        </div>
        </main>
    </main>
  )
}