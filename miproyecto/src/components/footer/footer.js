import React, { Component } from 'react'

export default class footer extends Component {
    render() {
      return (
          <div>
              <footer>
  <div className="row">
    <div className="twelve columns">
      <ul className="social-links">
      <li><a href="https://www.facebook.com/antonio.salascaballero/"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li> 
       <li><a href="#"><i className="fa fa-google-plus" /></a></li>
       {/*<li><a href="#"><i className="fa fa-linkedin" /></a></li>*/} 
        <li><a href="https://www.instagram.com/mm.salas97/"><i className="fa fa-instagram" /></a></li>
      </ul>
      <ul className="copyright">
        <li>© Copyright 2021</li> 
        <li> Pagina creada por: Carlos Antonio Salas Caballero </li> 
        <li>Creada con el FrameWork: ReactJS </li> 
      </ul>
    </div>
    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
  </div>
</footer>

          </div>
      )
    }
  }