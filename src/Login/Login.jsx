import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Common/UserContext";

export default function LoginPage() {

    const [name, setName] = useState("");               //Uso de useState
    const [password, setPassword] = useState("");       //Uso de useCustomHook
    const {setUserName} = useUser();                    //Uso de useCustomHook
    const {setUserIsReg} = useUser();                   //Uso de useCustomHook
    const navigate = useNavigate();

    //Se ejecuta al dar click en "Login" boton
    const handleLogin = (e) => {
        e.preventDefault();
        const testUserName = "Jessica";
        const testPassword = "1234";

        if (name === testUserName && password === testPassword) {
            setUserIsReg(true);     //Cambia el valor global de que es un usuario registrado
            setUserName(name);      //Cambia el valor global del nombre
            navigate("/");          //Navega a la pagina de inicio 

        } else {
            alert("El usuario o la contraseña no son correctas");
        }
    };

    return (
        <div className="login">
            <h1 className="login__title"> Iniciar sesión</h1>
            <form onSubmit={handleLogin} className="login__form">
                <div className="login__form-group">
                    <label className="login__label">Usuario: </label>
                    <input type="text" value={name} className="login__user" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="login__form-group">
                    <label className="login__label">Contraseña: </label>
                    <input type="password" value={password} className="login__pass" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button type="submit" className="login__button">Login</button>
            </form>
        </div>
    )
}