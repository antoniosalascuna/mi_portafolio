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
      <li><a className="smoothscroll" href="#portfolio">Trabajos</a></li>
      <li><a className="smoothscroll" href="#testimonials">Testimonios</a></li>
      <li><a className="smoothscroll" href="#contact">Contacto</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hola mi nombre es Carlos Antonio Salas Caballero</h1>
      <h3>Soy un estudiante egresado de la <span>Universidad Naciona de Costa Rica</span>, <span>soy un 
        apasionado con la tecnologia y el desarrollo de paginas Web</span>  <span>En la siguiente pagina encontraras mi curriculum de vida y conoceras un poco sobre mi. Para continuar preciona el siguiente boton --></span> <a className="smoothscroll" href="#about"> <a className="smoothscroll" href="#about">Sobre mi</a>.</h3>
      <hr />
      <ul className="social">
        <li><a href="#"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
        <li><a href="#"><i className="fa fa-instagram" /></a></li>
        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
        <li><a href="#"><i className="fa fa-skype" /></a></li>
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