import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";

export default function Navigation(){
    return(    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div>
                <Image id="logoNav"
                src="/logo.jpg" 
                alt="Logo de tepeyac_inn" 
                width={50}
                height={50}
                />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/eventos">Eventos</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/galeria">Galeria</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/paquetes">Paquetes</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}