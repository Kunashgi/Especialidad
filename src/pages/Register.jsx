import React, {useState} from 'react';
import FormInput from '../components/FormInput';
import Logo from '../imagenes/Logo.jpg';
import "./Register.css";

function Register (){
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [rut, setRut] = useState();
    const [documento, setDocumento] = useState();
    const [nacimiento, setNacimiento] = useState();
    const [telefono, setTelefono] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirm] = useState();
    const handleSubmitClick = (event) =>{
        console.log ("Enviando" , {nombre, email, rut, documento, nacimiento, telefono, password, confirmpassword});
    }
    return (
    <div className = "maincontainer">
        <div className="caja-container">
            <h4>Registrate a la sucursal virtual de EZ POST y descubre los beneficios que tenemos para ti</h4>
            <div className="contenido-caja">
                 <div>*Gestiona tus envios</div>
                 <div>*Guarda tus envios frecuentes</div>
                 <div>*Paga en linea o sucursal</div>
                 <div>*Guarda tus direcciones y más</div>
            </div>
        </div>
        <div className = "mainregister">
            <div className= "titulo-register"> 
               <h3>Formulario de registro</h3>
               <img src={Logo} className="logo-register"/>
            </div>
        <div className="register">    
            <form id="Datos">
                <FormInput label="Nombre Completo" placeholder="Ejemplo: Eduardo Barrera" type="text"
                onChange={(event) => setNombre(event.target.value)}/>
                <FormInput label="Correo electronico" placeholder="Ejemplo: Ezpost@gmail.com" type="email"
                onChange={(event) => setEmail(event.target.value)}/>
                <div className = "division1">
                <FormInput label="Rut" placeholder="9.999.999-9" type="text"
                onChange={(event) => setRut(event.target.value)}/>
                <FormInput label="N° de documento" placeholder="555.555.555" type="text"
                onChange={(event) => setDocumento(event.target.value)}/>
                </div>
                <FormInput label="Fecha de nacimiento" type="date"
                onChange={(event) => setNacimiento(event.target.value)}/>
                <FormInput label="Télefono" placeholder="(+56) 9 9999 9999" type="text"
                onChange={(event) => setTelefono(event.target.value)}/>
                <div className = "division1">
                <FormInput label="Contraseña" placeholder="********" type="password"
                onChange={(event) => setPassword(event.target.value)}/>
                <FormInput label="Confirmar contraseña" placeholder="********" type="password"
                onChange={(event) => setConfirm(event.target.value)}/>
                </div>
                <div className= "posicion">         
                   <input type="submit" className= "boton" value="Registrarse" onClick={handleSubmitClick} />
                </div> 
                <div className="olvido">¿Ya tienes cuenta? Inicia sesion aquí</div>
            </form>
            
        </div>        

        </div>
    </div>
    

  
  
  
      
    );

}

export default Register;