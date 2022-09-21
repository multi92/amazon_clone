//GLOBAL VARIABLE STATE PROVIDER

import React, { createContext, useContext, useReducer } from "react";

//prepares the DATALAYER for basket count and user login, logout
export const StateContext = createContext();

//BUILD PROVIDER
//wrap our app and provide the Data layer

export const StateProvider =
  //initialState = how data looks in beggining
  ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
