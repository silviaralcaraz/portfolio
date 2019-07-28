import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">Sobre mí</span>
                        <h2 className="colorlib-heading">¿Quién soy?</h2>
                        <p>Me llamo Silvia y soy una ingeniera informática de Galicia <i className="icon-umbrella" aria-hidden="true"/> (España)
    					graduada por la Universidad de Santiago de Compostela.</p>
    					<p>Realicé como Trabajo de Fin de Grado (TFG) una aplicación dentro del ámbito de la biotecnología donde se empleaban
    					herramientas Big Data para mejorar su rendimiento. Actualmente,
                        mis intereses profesionales siguen esa línea aunque también incluyen otros.</p>
                    </div>
                    <h4>Intereses profesionales</h4>
                    <div class="row">
    					<div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
    						<div class="services color-1">
    							<span class="icon2"><i class="icon-bulb"></i></span>
    							<h3>Investigación</h3>
    						</div>
    					</div>
    					<div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
    						<div class="services color-3">
    							<span class="icon2"><i class="icon-data"></i></span>
    							<h3>Big Data</h3>
    						</div>
    					</div>
    					<div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
    						<div class="services color-4">
    							<span class="icon2"><i class="icon-server"></i></span>
    							<h3>HPC</h3>
    						</div>
    					</div>
                        <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
    						<div class="services color-2">
    							<span class="icon2"><i class="icon-code-outline"></i></span>
    							<h3>IA</h3>
    						</div>
    					</div>
    				</div>

                    <h4>Otros intereses</h4>
                    <div class="row">
    					<div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
    						<div class="services color-4">
    							<span class="icon2"><i class="icon-music2"></i></span>
    							<h3>Música</h3>
    						</div>
    					</div>
    					<div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
    						<div class="services color-2">
    							<span class="icon2"><i class="icon-book2"></i></span>
    							<h3>Lectura</h3>
    						</div>
    					</div>
    					<div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
    						<div class="services color-3">
    							<span class="icon2"><i class="icon-camera3"></i></span>
    							<h3>Fotografía</h3>
    						</div>
    					</div>
    					<div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
    						<div class="services color-1">
    							<span class="icon2"><i class="icon-plane"></i></span>
    							<h3>Viajes</h3>
    						</div>
    					</div>
    				</div>


            </div>
            </div>
            </div>
        </div>
    </div>
</section>
</div>
    )
  }
}
