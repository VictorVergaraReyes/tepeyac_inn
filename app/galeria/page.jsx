import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

function Galeria(){
  return(
    <div className="bg-dark-subtle">
      <Navigation></Navigation>
      <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>

      <h1>Galeria</h1>
      <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" data-masonry='{"percentPosition": true }'>
  <div className="col">
    <div className="card">
      <Image src="https://placeimg.com/640/480/animals" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <Image src="https://placeimg.com/500/600/people" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <Image src="https://placeimg.com/640/480/tech" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <Image src="https://placeimg.com/640/480/nature" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Image src="https://placeimg.com/640/480/animals" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <Image src="https://placeimg.com/500/600/people" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <Image src="https://placeimg.com/640/480/tech" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <Image src="https://placeimg.com/640/480/nature" className="card-img-top img-fluid" alt="..." height={250} width={300}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  )
}

export default Galeria