import React, { Component } from 'react'

export default class Organizations extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="organizations">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">Organizaciones</span>
                                    <h2 className="colorlib-heading">¿Qué hago?</h2>
                                    <p>Desde finales del año 2017 soy <b>co-organizadora</b> del <i>Google Developers Group</i>
                                    de Santiago de Compostela (<b><a href="http://meetup.com/es-ES/gdgsantiagoes">GDG Santiago</a></b>).</p>
                                    <p>Los GDGs son organizaciones sin ánimo de lucro patrocinadas por <i>Google</i> que tienen por
                                    objetivo compartir conocimiento mediante todo tipo de eventos y crear comunidad.</p>
                                    <p>Personalmente, la experiencia de organizar y asistir a eventos <i>tech</i> me ha dado la oportunidad de aprender
                                    de otros profesionales, mejorar no sólo mis habilidades técnicas y conocer a la comunidad,
                                    lo que me parece verdaderamente enriquecedor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <div className="project" style={{backgroundImage: 'url(images/hashcode18.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3>Hash Code 2018</h3>
                                <span>R.U. Monte da Condesa</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                    <div className="project" style={{backgroundImage: 'url(images/portasAbertas.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3>Portas abertas 2018</h3>
                                <span>Singulario</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                    <div className="project" style={{backgroundImage: 'url(images/teambuilding18.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3>Team Building 2018</h3>
                                <span>Escola Técnica Superior de Enxeñería (ETSE)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                    <div className="project" style={{backgroundImage: 'url(images/devfest18_2.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3>Dev Fest Galicia 2018</h3>
                                <span>Escola Técnica Superior de Enxeñería (ETSE)</span>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="row">

                <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <div className="project" style={{backgroundImage: 'url(images/hashcode19.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3>Hash Code 2019</h3>
                                <span>Doutroxeito Coworking</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                    <div className="project" style={{backgroundImage: 'url(images/ioextended19.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3>I/O Extended 2019</h3>
                                <span>Noping Gaming Bar</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                    <div className="project" style={{backgroundImage: 'url(images/birratech19.jpg)'}}>
                        <div className="desc">
                            <div className="con">
                                <h3>BirraTech 2019</h3>
                                <span>Singulario</span>
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
