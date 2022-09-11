import { createContext } from "react";

const AppContext = createContext({
tema: "nome",
})

export function AppProvider(props:any){
  return (
    <AppContext.Provider value={{
      tema: 'dark'
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
export const AppConsumer = AppContext.Consumer