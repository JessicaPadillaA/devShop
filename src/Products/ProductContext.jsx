import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const ProductContext = createContext();

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
    const {countDressRed,setCountDressRed}=useState(10);
    const {countDressBlue,setCountDressBlue}=useState(30);
    const {countShirtWhite,setCountShirtWhite}=useState(10);
    const {countShirtGreen,setCountShirtGreen}=useState(10);
  

  return (
    <ProductContext.Provider
      value={{
        countDressRed,
        setCountDressRed,
        countDressBlue,
        setCountDressBlue,
        countShirtWhite,
        setCountShirtWhite,
        countShirtGreen,
        setCountShirtGreen,

      }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook para usar el contexto
export const useProduct = () => useContext(ProductContext);
