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
                      <div className="timeline-icon color-1">
                        <i className="icon-server" />
                      </div>
                      <div className="timeline-label">
                        <h2>HP CDS: estudiante en prácticas <span>junio-julio 2018</span></h2>
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
                        <h2>Universidade de Santiago de Compostela <span>2014-2019</span></h2>
                        <p>Grao en Enxeñaría Informática.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-music2" />
                      </div>
                      <div className="timeline-label">
                        <h2>CMUs Xan Viaño (Ferrol) <span>2004-2008</span></h2>
                        <p>Grado Elemental en Estudios de Música.</p>
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
