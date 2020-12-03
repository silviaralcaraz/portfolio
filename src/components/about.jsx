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
                      <p align="justify"> Mi nombre es Silvia y soy graduada en Ingeniería Informática por la Universidad de Santiago de Compostela,
                      donde también realicé el Máster en Computación de Altas Prestaciones.</p>
                      <p align="justify">Como Trabajo de Fin de Grado (TFG) realicé una aplicación dentro del ámbito de la biotecnología donde se empleaban
                      herramientas Big Data para mejorar su rendimiento. Este proyecto me permitió introducirme en el mundo de los datos masivos y el HPC,
                      motivándome a especializarme con el máster al concluir el grado y marcando las que aun siguen siendo mis principales líneas de interés.
                      </p>
                      <p align="justify">En la actualidad, trabajo como investigadora predoctoral desarrollando una tesis focalizada en la aplicación
                        de técnicas de HPC y en la computación en la nube.</p>
                    </div>
                    <h4>Intereses profesionales</h4>
                    <div class="row">
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                        <div class="services color-4">
                          <span class="icon2"><i class="icon-server"></i></span>
                          <h3>HPC</h3>
                        </div>
                      </div>
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
                        <div class="services color-2">
                          <span class="icon2"><i class="icon-cloud4"></i></span>
                          <h3>Cloud Computing</h3>
                        </div>
                      </div>
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
                        <div class="services color-3">
                          <span class="icon2"><i class="icon-code-outline"></i></span>
                          <h3>Big Data</h3>
                        </div>
                      </div>
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                        <div class="services color-1">
                          <span class="icon2"><i class="icon-bulb"></i></span>
                          <h3>Machine Learning</h3>
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
