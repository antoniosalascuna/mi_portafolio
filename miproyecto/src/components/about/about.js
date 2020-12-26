import React, { Component } from 'react' 


export default class about extends Component {
    render() {
      return (
          <div>
          
          <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepic.jpg" alt />
    </div>
    <div className="nine columns main-col">
      <h2>Sobre mi</h2>
      <p>
        Soy una persona apasionada con la tecnologia, sobre todo el ambito de desarrollo de aplicaciones web responsive, soporte tecnico
        redes y bases de datos SQL Y NoSQL.
        Me gusta mucho el trabajo en equipo, me gusta aportar y escuchar nuevas ideas, no me gustar depender de solo una solución
        a un problema me gusta que existan varias ideas que ayuden a resolverlo. No me considero como una persona que se cree superior
        a otras, tengo claro que existen personas con varias capacidades, unas son mejores que otras en diferente ambitos pero con el trabajo en equipo se puede crear cosas grandes y buenas.
        "Dos cabezas, piensan mejor que una".
        Me gusta aprender cosas nuevas que me ayuden en el futuro y aplicarlas en proyectos de interes o demanda.
        
      </p>
     {/*  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
      </p>*/}
      <div className="row">
        <div className="columns contact-details">
          <h2>Detalles de Contacto</h2>
          <p className="address">
            <span>Antonio Salas Caballero</span><br />
            <span> Lugar de Residencia: Rio Claro, Zona Sur Costa Rica<br />
            </span><br />
            <span>Numero de Telefono: (+506)8715-5357</span><br />
            <span>Correo Electronico: antoniosalas1996@gmail.com</span>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>
        </div>
      )
    
    }
}
