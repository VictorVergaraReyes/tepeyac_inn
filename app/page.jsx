import React from "react";

export default function IndexPage(){
  return(
    <div>
      <h1>Index Page</h1>
      <div>
        <h2>Acerca de nosotros</h2>
        <div className="col-12">Imagen grande con slogan</div>
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
      </div>
      <div >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.3499990006663!2d-99.12313612834393!3d19.481419364010307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f99fe6c9d559%3A0x10765da04acbcb7b!2sSal%C3%B3n%20de%20Fiestas%20Tepeyac%20Inn!5e0!3m2!1ses-419!2smx!4v1686669005646!5m2!1ses-419!2smx" 
        width="600" 
        height="450" 
        allowfullscreen="" 
        loading="lazy" 
        style={{border:"0"}}
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </div>
  )
}