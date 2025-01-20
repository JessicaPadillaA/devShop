import { Link } from "react-router-dom";
import { useUser } from "./UserContext";


export default function HeaderPage() {

    const { userName, setUserName } = useUser(); //Uso de useCustomHook
    const { userIsReg, setUserIsReg } = useUser(); //Uso de useCustomHook
    const { userCounterCart, setUserCounterCart } = useUser(); //Uso de useCustomHook

    //Se ejecuta cuando el usuario da click en "Logout" link
    //Utiliza el useCustomHook para actualizar: userIsReg,carro de compras y el nombredel usuario
    const handleLogout = () => {
        setUserIsReg(false);
        setUserCounterCart(0);
        setUserName();
    }

    return (
        <div class="header">
            <div>
                <h4>DEVESHOP</h4>
                <h6>Bienvenid@ {userName || "Invitado"} </h6>
            </div>
            <nav class="header__menu">

                {userIsReg ? (
                    <ul>
                        <li><Link to="/" class="header__menu__link">Inicio</Link></li>
                        <li><Link to="/login" onClick={handleLogout} class="header__menu__link">Logout</Link></li>
                        <li><Link to="/cart" class="header__menu__link">Carrito ({userCounterCart})</Link></li>
                        <li><Link to="/pedidos" class="header__menu__link">Pedidos</Link></li>
                    </ul>
                ) : (
                    <ul>
                        <li><Link to="/" class="header__menu__link">Inicio</Link></li>
                        <li><Link to="/login" class="header__menu__link">Login</Link></li>
                        <li><Link to="/cart" class="header__menu__link">Carrito({userCounterCart})</Link></li>
                        <li><Link to="/pedidos" class="header__menu__link">Pedidos</Link></li>
                    </ul>
                )}
            </nav>
        </div>
    )
}