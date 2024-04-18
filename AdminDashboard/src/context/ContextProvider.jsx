import {createContext, useContext,useState} from 'react'



const StateContext = createContext({
  userProfile: false,
  notifications: false,
  cart: false,
  chart: false,
})
const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [IsClicked,setIsclicked] = useState(StateContext)


  return (
  <StateContext.Provider value={{activeMenu, setActiveMenu, IsClicked,setIsclicked}}>
      {children}
  </StateContext.Provider>
  )
}
export const usestateContext =()=> useContext(StateContext)

export default ContextProvider
