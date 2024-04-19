import { ReactElement, useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Fill } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { usestateContext } from "../context/ContextProvider"
import avatar from '../data/avatar.jpg'
import Cart from "./Cart"
import Notification from "./Notification"
import UserProfile from "./UserProfile"
import ChartsHeading from "./Charts/ChartsHeading"


const NavButton =({title, icon, customFunc, color, dotColor})=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" style={{color}} className="relative text-xl rounded-full hover:bg-light-gray" onClick={customFunc}>
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 -right-1 top-0"/>
      {icon}
   
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const {setActiveMenu,handleClick,IsClicked, setIsclicked,screenSize, setscreenSize} = usestateContext()

  useEffect(()=>{
      const handleResize =()=> setscreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize)

      handleResize()

      window,removeEventListener('resize', handleResize)
  },[])


  useEffect(()=>{
    if(screenSize<= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])
  return (
    <div className="flex items-center justify-between mx-2 md:mx-6 navbar">
      <NavButton
       title={"Menu"}
        color={"blue"}
         dotColor={""}
         customFunc={()=>setActiveMenu((prev)=>(!prev))}

          icon={<AiOutlineMenu/>}
           />
      <div className="flex items-center gap-5">
      <NavButton
       title={"Cart"}
        color={"blue"}
         dotColor={""}
          icon={<FiShoppingCart/>}
          customFunc={()=> handleClick('cart')}
           />

    <NavButton
       title={"Chat"}
        color={"blue"}
         dotColor={"#03C9D7"}
          icon={<BsChatLeft/>}
          customFunc={()=> handleClick('chat')}
           />


    <NavButton
       title={"Notification"}
        color={"blue"}
          dotColor={"#03C9D7"}
          icon={<RiNotification3Fill/>}
          customFunc={()=> handleClick('notification')}
           />


          <TooltipComponent content='Profile' position="BottomCenter">
          <div className="flex items-center cursor-pointer p-3 hover:bg:light-gray rounded-lg"   customFunc={()=> handleClick('chat')}>
              <img src={avatar} className="rounded-full w-8 h-8"/>
              <p>
                <span className="text-gray-400 text-14">Hi,</span> {'  '}
                <span className="text-gray-400 ml-1 text-14">Joseph</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 ml-1 text-14"/>
           </div>
          </TooltipComponent>
         {IsClicked.cart && <Cart/>}
         {IsClicked.chat && <ChartsHeading/>}
         {IsClicked.notification && <Notification/>}
         {IsClicked.userprofile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar