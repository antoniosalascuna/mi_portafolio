
import React, { Component } from 'react'

export default class contact extends Component {
  render() {
    return (
      <div>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Mis Titulos.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead"> En la siguiente seccion se le mostrar los diferentes titulos que poseo.
      </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <div className="widget widget_contact">
                <h4>Ubicacion y Telefono</h4>
                <p className="address">
                  Carlos Antonio Salas Caballero<br />
                   Costa Rica <br />
                  <span>(+506) 87155359 </span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Titulos</h4>
                <ul id="twitter">
                  <li>
                    <span>   En el siguiente link se podrán observar los titulos adquiridos (En construcción).
                      Para observarlo es necesario poseer una cuenta de <strong>Google Drive</strong>
              <a href="https://drive.google.com/drive/folders/1qDukc-NHEtfOwvnrBpcekrQ4-JWuqdrD?usp=sharing"> Ver Titulos</a>
                    </span>
                    <b><a href="#">2 Days Ago</a></b>
                  </li>
  
                </ul>
              </div>
            </div>
            <aside className="four columns footer-widgets">


            </aside>
          </div>
        </section>
      </div>
    )
  }
}


