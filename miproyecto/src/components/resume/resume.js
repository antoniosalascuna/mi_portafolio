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
                    La Universidad Nacional me ha enseñado muchas cosas orientadas a las necesidades que las personas poseen
                    ademas de los diferentes materias, me enseñó que el trabajo en equipo en mucho mejor que el trabajo individual,
                    reconocer que cada persona tiene posee la misma capacidad que todas, solo que a veces que algunos se les dificulta
                    un poco más, pero tienen la capacidad de mejorar, la capacidad de ser mas humanista con el medio ambiente.
          Participe en varios grupos de  actividades de la Universidad Nacional, incluyendo en la <strong>ASEUNA.</strong>
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
                Representacion y descripcion de las aplicaciones que he utilizado dentro del entorno de desarrollo
      </p>
              <div className="bars">
                <ul className="skills">
                  {/* <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>*/}
                  {/* <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>*/}

                  <div className="container-fluid" id="habilidades">

                    <div className="row">

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card">
                          <img className="card-img-top " id="logos" alt="logo-html5" src="images/html5.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand html5" /></li>
                            <p class="card-text">HTML5</p>
                          </div>

                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card">
                          <img className="card-img-top " id="logos" alt="logo-css3" src="images/css3logo.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand css" /></li>
                            <p class="card-text">CSS3</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card">
                          <img className="card-img-top " id="logos" alt="logo-js" src="images/logojs.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">JS</p>
                          </div>
                        </div>

                      </div>

                 


                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card">
                          <img className="card-img-top " id="logos" alt="logo-nodejs" src="images/node_js.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand illustrator" /></li>
                            <p class="card-text">NodeJS</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card ">
                          <img className="card-img-top " id="logos" alt="logo-angular_logo" src="images/angular_logo.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">Angular 10.0</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " >
                          <img className="card-img-top " id="logos" alt="react-logo" src="images/logo512.png"></img>

                          <div className="card-body">

                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">ReactJs</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " >
                          <img className="card-img-top " id="logos" alt="logo-codeigniter" src="images/cdlogo.jpg"></img>

                          <div className="card-body">

                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">CodeIgniter</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" >
                          <img className="card-img-top " id="logos" alt="logo-github" src="images/th.jpg"></img>

                          <div className="card-body">
                            <li><span className="bar-expand jquery" /></li>
                            <p class="card-text">GitHub</p>
                          </div>
                        </div>

                      </div>


                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="card" >
                          <img className="card-img-top " id="logos" alt="logo-wordpress" src="images/wordpress.jpg"></img>

                          <div className="card-body">

                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">Wordpress</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " >
                          <img className="card-img-top" id="logos" alt="logo-blender" src="images/Logo-Blender-svg.png"></img>

                          <div className="card-body">
                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">Blender 3D</p>
                          </div>
                        </div>

                      </div>


                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " >
                          <img className="card-img-top" id="logos" alt="logo-blender" src="images/mysql_PNG23.png"></img>

                          <div className="card-body">
                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">MySQL</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className=" card " >
                          <img className="card-img-top" id="logos" alt="logo-Mongodb" src="images/mongo-db-logo.png"></img>

                          <div className="card-body">
                            <li><span className="bar-expand photoshop" /></li>
                            <p class="card-text">MongoDB</p>
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