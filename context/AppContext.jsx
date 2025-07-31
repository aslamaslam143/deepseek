// "use-client";
// import { useUser } from "@clerk/nextjs";
// import {  createContext, useContext } from "react";

// export const AppContext =createContext()
// export const useAppContext =()=>{
//     return useContext(AppContext)
// }
// export const AppContextProvider =({children})={
// const {user}=useUser()
// const value ={
//     user
// }
// return  <AppContext.Provider> {children}</AppContext.Provider>
// }
"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react";

// 1. Create context
export const AppContext = createContext();

// 2. Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// 3. Provider component
export const AppContextProvider = ({ children }) => {
  const { user } = useUser();

  const value = {
    user,
  };

  // ✅ Fix: Add the `value` prop here
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
