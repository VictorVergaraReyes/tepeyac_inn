import Navigation from "@/components/Navigation"
import styles from "./page.module.css"
export default function Contacto(){
  return(
      <main className={styles.main}>
        <Navigation></Navigation>
        <div className="container-fluid row align-items-start">
        <h1 className="text-center">Contacto</h1>
        
        {/* Formulario */}
        <form className="col-12 col-lg-6">
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Numero de teléfono</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"/>
          </div>
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Selecciona el tipo de evento</option>
            <option value="1">XV años</option>
            <option value="2">Boda</option>
            <option value="3">Bautizo</option>
            <option value="4">Salidas escolares</option>
            <option value="4">Otro</option>
          </select>
          {/* Fecha */}
          <section className="row">
          <label htmlFor="date">Fecha:</label>
          <input
          className="col-12 col-md-6 col-lg-6"
            type="date"
            id="date"
            required
          />
          {/* No de personas */}
          <div className="col-12 col-md-6 col-lg-6">
            <label for="exampleFormControlInput1" className="form-label">Número de personas</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"/>
          </div>
          </section>
          
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Describenos el evento</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>

        {/* Informacion de contacto */}
        <div className="col-12 col-lg-6">
          <ul >
            <p>Dirección: Calle unión  numero 216, Mexico City, Mexico, 07020</p>
            <p>Teléfono: 55 1289 0770</p>
            <p>Correo: salontepeyacinn.info@gmail.com</p>
            <p>Horario</p>
          </ul>

          {/*Mapa */}
          <section className="d-flex justify-content-center">
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
        </div >
        </div>
      </main>
    )
  }