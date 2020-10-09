import React, {useState, Fragment} from 'react';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({agregarNuevoGasto}) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad,guardarCantidad ] = useState(0);
    const [ error, guardarError] = useState(false)

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validar 
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' )
        {
            guardarError(true);
            return;
        }
        guardarError(false);
        
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        agregarNuevoGasto(gasto);
        
        //resetear el formulario
        

    }

    
    return (
        <Fragment>
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto "/>  : null}  
            
            <form
                onSubmit = {agregarGasto}
            >
                <div className="campo">
                    <label>Nombre Gasto</label>
                    
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={e => guardarNombre (e.target.value)}
                        
                    />
                </div>
                <div className="campo">
                    <label>Cantidad Gasto</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={e => guardarCantidad (parseInt(e.target.value,10))}
                    />
                </div>
                
                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar Gasto"
                />

            </form>
        </Fragment>

    );
}
 
export default Formulario;