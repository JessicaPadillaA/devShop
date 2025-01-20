import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");                       //Uso de Hook useState
  const [userCounterCart, setUserCounterCart] = useState(0);          //Uso de Hook useState
  const [userIsReg, setUserIsReg] = useState(false);                  //Uso de Hook useState
  const [userCart, setUserCart] = useState([]); 
  const [userCountOrders,setUserCountOrders]=useState(0);                      //Uso de Hook useState
  const [userOrders,setUserOrders]=useState([]);

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        userCounterCart,
        setUserCounterCart,
        userIsReg,
        setUserIsReg,
        userCart,
        setUserCart,
        userCountOrders,
        setUserCountOrders,
        userOrders,
        setUserOrders,

      }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);
