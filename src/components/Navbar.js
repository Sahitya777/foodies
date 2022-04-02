import {useState} from 'react'
import Sidebar from './Sidebar';
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
function Navbar(){
    const links=[
        {
            name:"Home",
            path:"/",
            icon:faHome
        },
        {
            name:"Recipes",
            path:"/recipes",
            icon:faList
        },
        {
            name:"Settings",
            path:"/settings",
            icon:faCog
        }
    ]
    const [showSidebar,setShowSidebar]=useState(false)

    function closeSidebar(){
        setShowSidebar(false)
    }

    return(
        <div>
            <div className="navbar container">
                <a href="#!" className="logo">F<span>oo</span>dies Corner</a>
                <div className="nav-links">
                { links.map(link => (
                        <a href='#!' key={link.name}>{link.name}</a>
                    )) }
                    {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a> */}
                </div>
                <div onClick={()=> setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active":"sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links}/> }
                     
        </div>
        
    )
}

export default Navbar;