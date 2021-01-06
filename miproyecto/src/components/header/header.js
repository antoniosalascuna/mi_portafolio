import React, { Component } from 'react' 


export default class header extends Component {
    render() {
      return (
          <div>
         <>
<header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
      <li><a className="smoothscroll" href="#about">Sobre mi</a></li>
      <li><a className="smoothscroll" href="#resume">Resumen</a></li>
      <li><a className="smoothscroll" href="#portfolio">Portafolio</a></li>
      <li><a className="smoothscroll" href="#contact">Titulos</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Saludos Visitante!!</h1>
      <h3> <strong>Bienvenido a mi portafolio.</strong> Mi nombre es Carlos Antonio Salas Caballero soy un apasionado con la tecnologia y desarrollo web <span>Soy egresado de la Universidad Nacional de Costa Rica</span>. A continuacion encontraras un poco de informacion sobre mi <a className="smoothscroll" href="#about">Sigue bajando y verás más </a>
      <a className="smoothscroll" href="#about">Sobre mi</a>.</h3>
      <hr />
      <ul className="social">
        <li><a href="https://www.facebook.com/antonio.salascaballero/"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li> 
       <li><a href="#"><i className="fa fa-google-plus" /></a></li>
       {/*<li><a href="#"><i className="fa fa-linkedin" /></a></li>*/} 
        <li><a href="https://www.instagram.com/mm.salas97/"><i className="fa fa-instagram" /></a></li>
       {/*<li><a href="#"><i className="fa fa-dribbble" /></a></li>*/} 
       {/*<li><a href="#"><i className="fa fa-skype" /></a></li>*/} 
      </ul>
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header> {/* Header End */}
</>
          </div>
      )
    }
  }