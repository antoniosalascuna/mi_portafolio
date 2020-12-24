import React from 'react';

class Micomponente extends React.Component {

    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon Cocido'],
            calorias: 400
        };
        return (
            <div className="container">

                <div className="card">
                    <div className="card-header">
                        <h1>Lista de ingredientes para una {receta.nombre} </h1>
                    </div>
                    <div className="card-body">

                        <table className="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Vegetal</th>
                                    <th scope="col">Lacteo</th>
                                    <th scope="col">Carne</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    receta.ingredientes.map((ingrediente, i) => {
                                        return (
                                            <td key={i}>{ingrediente}</td>
                                        );
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>





            </div>

        );

    }

}
export default Micomponente;