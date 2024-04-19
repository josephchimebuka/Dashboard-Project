import {createContext, useContext,useState} from 'react'



const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [IsClicked,setIsclicked] = useState(initialState)

const handleClick=(clicked)=>{
  setIsclicked({...initialState, [clicked]: true})
}
  return (
  <StateContext.Provider value={{activeMenu, setActiveMenu, IsClicked,setIsclicked}}>
      {children}
  </StateContext.Provider>
  )
}
export const usestateContext =()=> useContext(StateContext)

export default ContextProvider
