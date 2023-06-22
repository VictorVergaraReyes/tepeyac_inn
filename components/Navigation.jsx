'use client'
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import { useState } from "react";


export default function Navigation(){
    const [menu,setMenu]=useState(false)
    const toogleMenu=()=>{setMenu(!menu)}
    return(
    <section>
        <nav className="navbar navbar-expand-lg navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
            <div>
                <Image id="logoNav"
                src="/logo.jpg" 
                alt="Logo de tepeyac_inn" 
                width={50}
                height={50}
                />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toogleMenu}>
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
                <li className="nav-item">
                <Link className="nav-link" href="/contacto">Contacto</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className={`${menu?'d-flex':'d-none'} flex-column `}>
        <ul><Link className="nav-link text-center" aria-current="page" href="/">Home</Link></ul>
        <ul><Link className="nav-link text-center" href="/eventos">Eventos</Link></ul>
        <ul><Link className="nav-link text-center" href="/galeria">Galeria</Link></ul>
        <ul><Link className="nav-link text-center" href="/paquetes">Paquetes</Link></ul>
        <ul><Link className="nav-link text-center" href="/contacto">Contacto</Link></ul>
    </div>
    </section>  
    )
}