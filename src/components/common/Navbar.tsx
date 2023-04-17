import {useEffect, useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Links from "./Links";
import {SelectedPage} from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "./ActionButton";

type Props = {
    selectedPage : SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}
const Navbar =({selectedPage, setSelectedPage, isTopOfPage}:Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const navBarBackgroundColor = isTopOfPage ? "" :"bg-primary-100 drop-shadow";
    return (
       <nav>
           <div className = {`${flexBetween} fixed top-0 py-6 w-full z-30 ${navBarBackgroundColor}`} >
               <div className = {`${flexBetween} m-auto w-5/6`} >
                   <div className = {`${flexBetween} w-full gap-16`}>
                       <img src = {Logo} alt="logo"/>
                       {
                           isAboveMediumScreen ? (
                            <div className={`${flexBetween} w-full`}>
                               <div className={`${flexBetween} gap-8 text-sm`}>
                                     <Links
                                         page="Home"
                                         selectedPage={selectedPage}
                                         setSelectedPage={setSelectedPage}
                                     />
                                     <Links
                                         page="Benefits"
                                         selectedPage={selectedPage}
                                         setSelectedPage={setSelectedPage}
                                     />
                                     <Links
                                         page="Our Classes"
                                         selectedPage={selectedPage}
                                         setSelectedPage={setSelectedPage}
                                     />
                                     <Links
                                         page="Contact Us"
                                         selectedPage={selectedPage}
                                         setSelectedPage={setSelectedPage}
                                     />
                               </div>
                               <div className={`${flexBetween} gap-8`}>
                                      <p>Sign In</p>
                                      <ActionButton setSelectedPage={setSelectedPage}>Be A Member</ActionButton>
                               </div>
                            </div>
                           ) : (
                                   <button className="rounded-full bg-secondary-500 p-2"
                                           onClick={()=>setToggleMenu(!toggleMenu)}
                                   >
                                     <Bars3Icon className="w-6 h-6 text-white" />
                                   </button>
                          )}
                   </div>
               </div>
           </div>

            {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreen && toggleMenu && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-4 text-2xl">
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
       </nav>
   )
}

export default Navbar

