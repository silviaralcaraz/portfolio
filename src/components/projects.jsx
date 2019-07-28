import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Proyectos</span>
								<h2 className="colorlib-heading animate-box">¿Qué hago?</h2>
							</div>
						</div>

						<div className="row">

							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/flinkbwa_photo.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.github.com/silviaralcaraz/flinkbwa">FlinkBWA - 2019</a></h3>
											<span>Big Data | Biotecnología | Trabajo de Fin de Grado (TFG)</span>
                                            <p>Paralelización del alineador de secuencias genéticas Burrows-Wheeler Aligner
                                            con la plataforma Apache Flink para mejorar su rendimiento en
                                            términos de eficiencia.</p>
											<p className="icon">
												<span><a href="#"><i className="icon-data" />  Flink</a></span>
												<span><a href="#"><i className="icon-server" /> Hadoop</a></span>
                                                <span><a href="#"><i className="icon-code" /> Java</a></span>
                                                <span><a href="#"><i className="icon-git" /> Git</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/react_logo.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.github.com/silviaralcaraz/personal-portfolio">Personal portfolio - 2019</a></h3>
											<span>Web</span>
                                            <p>Se trata de esta misma web que sirve como Portfolio personal y a su vez
                                            ayudó a tener contacto de nuevo con el mundo del Front-end.</p>
											<p className="icon">
												<span><a href="#"><i className="icon-html-five"/> HTML</a></span>
												<span><a href="#"><i className="icon-css3" /> CSS</a></span>
												<span><a href="#"><i className="icon-code" /> React</a></span>
                                                <span><a href="#"><i className="icon-git" /> Git</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

						</div>

						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Cargar más<i className="icon-reload"/></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
