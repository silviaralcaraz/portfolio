import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Formación</span>
                <h2 className="colorlib-heading animate-box">Educación & Experiencia</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">

                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>CiTIUS: investigadora predoctoral <span>marzo 2020 - actualidad</span></h2>
                        <p><i className="icon-location" aria-hidden="true" /> Santiago de Compostela (Galicia)</p>
                        <p>Desarrollo de algoritmos paralelos y eficientes en C/C++ para el procesamiento de 
                          datos LiDAR en el contexto de una tesis focalizada en la aplicación de técnicas de 
                          HPC y en la computación en la nube.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>Doctorado en Tecnologías de la Información <span>2020 - actualidad</span></h2>
                        <p><i className="icon-location" aria-hidden="true" /> Universidad de Santiago de Compostela (USC)</p>                    
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Centro de Supercomputación de Galicia (CESGA): estudiante de máster en prácticas <span>abril 2020 - mayo 2020</span></h2>
                        <p><i className="icon-location" aria-hidden="true" /> Santiago de Compostela (Galicia)</p>
                        <p>Entrenamiento paralelo de modelos de Machine Learning con Horovod, un framework de aprendizaje
                        profundo distribuido de código abierto desarrollado por Uber. Se trabajó con Python y librerías
                        ampliamente utilizadas como Tensorflow y Keras.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-bulb" />
                      </div>
                      <div className="timeline-label">
                        <h2>CiTIUS: becaria de colaboración <span>Curso 2019-2020</span></h2>
                        <p><i className="icon-location" aria-hidden="true" /> Santiago de Compostela (Galicia)</p>
                        <p align="justify">Beca del Ministerio de Educación y Formación Profesional para colaborar con el
                        grupo de investigación del CiTIUS (Centro Singular de Investigación en Tecnoloxías Intelixentes)
                      dedicado al proyecto LiDAR.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>Máster en Computación de Altas Prestaciones (HPC) <span>2019-2020</span></h2>
                        <p><i className="icon-location" aria-hidden="true" /> Universidad de Santiago de Compostela (USC)</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Hewlett Packard CDS: estudiante de grado en prácticas <span>junio 2018 - julio 2018</span></h2>
                        <p><i className="icon-location" aria-hidden="true" /> Santiago de Compostela (Galicia)</p>
                        <p>Tareas de administración de sistemas y redes en entorno Windows para proyecto
                        del SERGAS.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>Grado en Ingeniería Informática <span>2014-2019</span></h2>
                        <p><i className="icon-location" aria-hidden="true" /> Universidad de Santiago de Compostela (USC)</p>
                        <p>Grado en Ingeniería Informática con especialización en Tecnologías de la Información. </p>                    
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
