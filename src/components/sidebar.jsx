import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Silvia R. Alcaraz</a></h1>
              <p><strong>Ingeniera informática</strong></p>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Intro</a></li>
                  <li><a href="#about" data-nav-section="about">Sobre mí</a></li>
                  {/*
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Formación</a></li>
                  <li><a href="#" data-nav-section="projects">Proyectos</a></li>
                  <li><a href="#" data-nav-section="organizations">Organizaciones</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="mailto:silviaralcaraz@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail" /></a></li>
                <li><a href="https://www.linkedin.com/in/silviaralcaraz/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/silviaralcaraz" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://twitter.com/silviaralcaraz" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              Made with <i className="icon-heart" aria-hidden="true"/> & <i className="icon-coffee" aria-hidden="true"/><br />
              Based on Jackson Template by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib.</a><br />
              Default images by <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels.</a>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
