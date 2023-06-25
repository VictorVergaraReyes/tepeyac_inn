'use client'
import React, { Component } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(){
    const clients=[
        {
            ranking:'⭐⭐⭐⭐⭐',
            text:'Buen ambiente instalaciones limpias bonitas espacio agradable pista de baile bonita, amena la música,  buen servicio de meseros lo recomiendo ampliamente',
            autor:'-Emma'
        },
        {
            ranking:'⭐⭐⭐⭐',
            text:'El salón esta bien acondicionado y el servicio es muy bueno',
            autor:'-Gerardo'
        },
        {
            ranking:'⭐⭐⭐⭐⭐',
            text:'Muy buen lugar con mucha vida y el servicio excelente de mis mejores experiencias en salones de eventos espero verlos pronto',
            autor:'-Kevin'
        },
        {
            ranking:'⭐⭐⭐⭐⭐',
            text:'Buen ambiente instalaciones limpias bonitas espacio agradable pista de baile bonita, amena la música,  buen servicio de meseros lo recomiendo ampliamente',
            autor:'-Emma'
        },
        {
            ranking:'⭐⭐⭐⭐',
            text:'El salón esta bien acondicionado y el servicio es muy bueno',
            autor:'-Gerardo'
        },
        {
            ranking:'⭐⭐⭐⭐⭐',
            text:'Muy buen lugar con mucha vida y el servicio excelente de mis mejores experiencias en salones de eventos espero verlos pronto',
            autor:'-Kevin'
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return(
    <>
        <h2>Opiniones</h2>
        <div>
            <div>
            <Slider {...settings}>
            {
                clients.map((client,index)=>{
                    return(
                    <div key={index}>
                        <h3>{client.ranking}</h3>
                        <p>{client.text}</p>
                        <h3>{client.autor}</h3>
                    </div>)
                })
            }
            </Slider>
            </div>
        </div>
    </>
    )
}