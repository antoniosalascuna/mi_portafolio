import React, { Component } from 'react'

export default class resume extends Component {
  render() {

    return (

      <div>
        <section id="resume">
          {/* Education
----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Educacion</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Años de Universidad</h3>
                  <p className="info">Estudiante<span>•</span> <em className="date">2016 - 2021</em></p>
                  <p>
                    La Universidad Nacional me ha enseñado muchas cosas orientadas a las necesidades que las personas poseen en la actualidad.
                    Ademas de los diferentes materias, me enseñó que el trabajo en equipo en mucho mejor que el trabajo individual,
                    reconocer que cada persona posee la misma capacidad que todas, solo que a veces que algunos se les dificulta
                    un poco más, pero tienen la capacidad de mejorar, el ser mas humanista con todas las personas y muy importante con el medio ambiente.
                    Participe en varios grupos de actividades de la Universidad Nacional, incluyendo en la <strong>ASEUNA.</strong>
                    Con el fin de brindar mi ayuda a la Universidad que me esta formando como un exelente profesional de calidad.
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">

              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}

          {/* Work

  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Work</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Awesome Design Studio</h3>
          <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
          </p>
        </div>
      </div> 
      <div className="row item">
        <div className="twelve columns">
          <h3>Super Cool Studio</h3>
          <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
          <p>
            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
          </p>
        </div>
      </div>
    </div>
  </div> 
  ----------------------------------------------- */}
          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Habilidades</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>
                Representación y descripción de las aplicaciones que he utilizado dentro del entorno de desarrollo web
            </p>
              <ul class="list-group">
                <li class="list-group-item">Lista de herramientas que conozco su funcionamiento y he utilizado
                dentro de mi vida como estudiante universitario</li>

                <li class="list-group-item list-group-item-dark">HTML5</li>
                <li class="list-group-item list-group-item-dark">CSS3</li>
                <li class="list-group-item list-group-item-dark">JavaScript</li>
                <li class="list-group-item list-group-item-dark">Bootstrap V4</li>
                <li class="list-group-item list-group-item-dark">Node Js</li>
                <li class="list-group-item list-group-item-dark">FrameWork Angular V10</li>
                <li class="list-group-item list-group-item-dark">FrameWork React </li>
                <li class="list-group-item list-group-item-dark">FrameWork Codeigniter</li>
                <li class="list-group-item list-group-item-dark">GitHub</li>
                <li class="list-group-item list-group-item-dark">Wordpress</li>
                <li class="list-group-item list-group-item-dark">Blender 2.8</li>
                <li class="list-group-item list-group-item-dark">MySQL</li>
                <li class="list-group-item list-group-item-dark">MongoDB</li>
              </ul>
              <div className="bars">
                <ul className="skills">
                  {/* <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>*/}
                  {/* <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>*/}

                  <div className="container-fluid" id="habilidades">

                    <div className="row">

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" id="hover-card">
                          <img className="card-img-top " id="logos" alt="logo-html5" src="images/html5.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand html5" /></li>
                            <p class="card-text">Es un conjunto de etiquetas que interpretan los navegadores,
                              funciona para elaborar paginas web, define su estrutura basica HTML5</p>
                          </div>

                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" id="hover-card">
                          <img className="card-img-top " id="logos" alt="logo-css3" src="images/css3logo.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand css" /></li>
                            <p class="card-text"> Hojas de estilo en cascadas(CSS), el CSS se encarga
                            de darle color, tamaño, posicionamiento y dar caracteristicas visuales a las
                            etiquetas HTML5</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" id="hover-card">
                          <img className="card-img-top " id="logos" alt="logo-js" src="images/logojs.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">JavaScript es un lenguaje de secuencias de comandos que permite
                            contenido de actualización dinamica, animar objetos en pocas palabras es el quién le
                            da el funcionamiento a las cosa en el DOM</p>
                          </div>
                        </div>

                      </div>


                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" id="hover-card">
                          <img className="card-img-top " id="logos" alt="logo-js" src="images/what-is-bootstrap-logo.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">Es una biblioteca de estilos CSS muy util en la web para darle
                            color, tamaño y posicionamiento a elementos HTML</p>
                          </div>
                        </div>

                      </div>




                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" id="hover-card">
                          <img className="card-img-top " id="logos" alt="logo-nodejs" src="images/node_js.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand illustrator" /></li>
                            <p class="card-text">NodeJS es un servidor de codigo abierto, compatible con las
                            versiones en ECMAScript 5 o 6 (JavaScript). Esta diseñado para la creación de app Web</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " id="hover-card">
                          <img className="card-img-top " id="logos" alt="logo-angular_logo" src="images/angular_logo.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">Angular es un potente FrameWork de Front End, tiene muchas librerias
                            de gran utilidad, es MVC y esta diseñado para crear paginas SPA(One-Single-Page)</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " id="hover-card" >
                          <img className="card-img-top " id="logos" alt="react-logo" src="images/logo512.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">React es otro FrameWork muy bueno en la parte visual(Front-End). Es conocido
                            como una biblioteca de JavaScript de codigo abierto.
                            Posee una ventaja con el diseño responsive para dispositivos moviles comparado con la competencia
                            </p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " id="hover-card" >
                          <img className="card-img-top " id="logos" alt="logo-codeigniter" src="images/cdlogo.jpg"></img>

                          <div className="card-body">

                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">CodeIgniter es un potente framework PHP muy liviano
                            construido para desarrolladores que necesitan un kit de herramientas simples y elegantes
                            para crear aplicaciones web completas</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" id="hover-card" >
                          <img className="card-img-top " id="logos" alt="logo-github" src="images/th.jpg"></img>

                          <div className="card-body">
                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">GitHub es un repository de codigo abierto que aloja  proyectos utilizando el control
                            de versiones de Git </p>
                          </div>
                        </div>

                      </div>


                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" id="hover-card" >
                          <img className="card-img-top " id="logos" alt="logo-wordpress" src="images/wordpress.jpg"></img>

                          <div className="card-body">

                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">Wordpress es un excelente CMS para creacion de paginas web profesionales en
                            rapido tiempo, se dice que mas del 70% de la web esta construida por este CMS, amigable con las
                            personas que poseen pocos conociemientos en HTML, CSS Y JS </p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " id="hover-card" >
                          <img className="card-img-top" id="logos" alt="logo-blender" src="images/Logo-Blender-svg.png"></img>

                          <div className="card-body">
                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">Blender 3D es un editor de objetos 3D, funciona para crear modelos de
                            objetos en 3D para luego convertilos en personajes de videojuegos e inclusive de cortometrajes animados</p>
                          </div>
                        </div>

                      </div>


                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " id="hover-card" >
                          <img className="card-img-top" id="logos" alt="logo-blender" src="images/mysql_PNG23.png"></img>

                          <div className="card-body">
                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">MySQL es un Sistema Gestor de Base de datos relacional
                           muy popular en el mundo por ser de codigo abierto </p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " id="hover-card" >
                          <img className="card-img-top" id="logos" alt="logo-Mongodb" src="images/mongo-db-logo.png"></img>

                          <div className="card-body">
                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">MongoDB es un Gestor de Bases de Datos NoSQL la informacióon se almacenan en JSON,
                            ofrece una gran flexibilidad y escalabilidad </p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section>

      </div>
    )
  }
}