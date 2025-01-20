import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Common/UserContext";

export default function PedidosPage() {


  const { userOrders, setUserOrders } = useUser([]); //Uso de useCustomHook}

  //Aqui se que pedido esta cancelando asi que puedo tomar que elementos tiene para regresarlos a stock el problema es que cuando me salgo de la pagina y regreso, el stock se pierde
  const handleReturns = (index,subIndex) => {
    //alert("Regresa "+(index+1) +"sub"+(subIndex+1));
    alert("Por el momento no esta disponible");
  }

  return (
    <div className="orders">
  <div className="orders__header">
    <h3 className="orders__title">Tabla de Pedidos</h3>
    <ul className="orders__list">
      {userOrders.map((subArray, index) => (
        <li key={index} className="orders__item">
          <p className="orders__order-title">Pedido {index + 1}</p>
          <ul className="orders__suborders">
            {subArray.map((item, subIndex) => (
              <li key={subIndex} className="orders__suborder">
                <p className="orders__suborder-title">SubPedido {subIndex + 1}</p>
                
                <table className="orders__table" border="1">
                  <thead>
                    <tr className="orders__table-header">
                      <th className="orders__table-cell">ID producto</th>
                      <th className="orders__table-cell">Nombre</th>
                      <th className="orders__table-cell">Precio</th>
                      <th className="orders__table-cell">Cantidad</th>
                      <th className="orders__table-cell">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="orders__table-row">
                      <td className="orders__table-cell">{item[0]}</td> {/* ID producto */}
                      <td className="orders__table-cell">{item[1]}</td> {/* Nombre */}
                      <td className="orders__table-cell">${item[2]}</td> {/* Precio */}
                      <td className="orders__table-cell">{item[3]}</td> {/* Cantidad */}
                      <td className="orders__table-cell">${item[2] * item[3]}</td> {/* Total */}
                    </tr>
                  </tbody>
                </table>

                <button 
                  className="orders__return-button" 
                  onClick={() => handleReturns(index, subIndex)}>
                  Devolver Pedido
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
</div>

  )
}