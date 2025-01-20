import { useUser } from "../Common/UserContext";

export default function CartPage() {

  const { userCart, setUserCart } = useUser([]); //Uso de useCustomHook
  const { userCounterCart, setUserCounterCart } = useUser(0); //Uso de useCustomHook
  const {userOrders,setUserOrders}=useUser();
  const{userCountOrders,setUserCountOrders}=useUser();

  /*
  Se ejecuta cuando el usuario presiona el boton "Comprar"
  Utiliza el useCustomHook para actualizar: el contador del carrito,el carrito
  */
  const handleBuy = (userCart) => {
    if (userCounterCart != 0) {
      alert("Gracias por su compra!");
      setUserCountOrders(userCountOrders+1);
      setUserOrders([...userOrders,userCart]);
      setUserCart([]);
      setUserCounterCart(0);
    } else {
      alert("No tiene articulos en su carrito");
    }
  }

  return (
    <div className="cart">
    <h1 className="cart__title">Carrito de compras</h1>
    <div className="cart__table-section">
      <h3 className="cart__table-title">Tabla de Productos</h3>
      <table className="cart__table">
        <thead>
          <tr className="cart__table-header">
            <th className="cart__table-header-cell">ID</th>
            <th className="cart__table-header-cell">Nombre</th>
            <th className="cart__table-header-cell">Precio</th>
            <th className="cart__table-header-cell">Cantidad</th>
            <th className="cart__table-header-cell">Total</th>
          </tr>
        </thead>
        <tbody>
          {userCart.map((prod) => (
            <tr key={prod[0]} className="cart__table-row">
              <td className="cart__table-cell">{prod[0]}</td> {/* Id del producto */}
              <td className="cart__table-cell">{prod[1]}</td> {/* Nombre del producto */}
              <td className="cart__table-cell">{prod[2]}</td> {/* Precio del producto */}
              <td className="cart__table-cell">{prod[3]}</td> {/* Cantidad del producto */}
              <td className="cart__table-cell">{prod[2] * prod[3]}</td> {/* Total de compra del producto */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <p className="cart__total">
      <span className="cart__total-label">Total de compra: </span>
      <span className="cart__total-price">
        $ {userCart.reduce((total, item) => total + item[2] * item[3], 0)}
      </span>
    </p>
  
    <button className="cart__button" onClick={() => handleBuy(userCart)}>Comprar</button>
  </div>
  


  )
}