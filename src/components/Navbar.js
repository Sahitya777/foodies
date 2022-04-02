import {useState} from 'react'
import Sidebar from './Sidebar';
function Navbar(){
    const links=[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"Recipes",
            path:"/recipes"
        },
        {
            name:"Settings",
            path:"/settings"
        }
    ]
    const [showSidebar,setShowSidebar]=useState(false)

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
            <Sidebar links={links}/>            
        </div>
        
    )
}

export default Navbar;