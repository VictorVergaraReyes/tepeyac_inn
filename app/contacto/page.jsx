export default function Contacto(){
  return(
      <section className="row align-items-start bg-dark-subtle">
        <div className="text-center">Imagen</div>
        <h1 className="text-center">Contacto</h1>
        <div className="col-12 col-lg-6">
          <ul >
            <p>Dirección: Calle unión  numero 216, Mexico City, Mexico, 07020</p>
            <p>Teléfono: 55 1289 0770</p>
            <p>Correo: salontepeyacinn.info@gmail.com</p>
          </ul>
        </div>
        <form className="col-12 col-lg-6">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        <section className="col-12 col-lg-6">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.3499990006663!2d-99.12313612834393!3d19.481419364010307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f99fe6c9d559%3A0x10765da04acbcb7b!2sSal%C3%B3n%20de%20Fiestas%20Tepeyac%20Inn!5e0!3m2!1ses-419!2smx!4v1686669005646!5m2!1ses-419!2smx" 
          width="600" 
          height="450" 
          allowfullscreen="" 
          loading="lazy" 
          style={{border:"0"}}
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </section>
        
      </section>
    )
  }