import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">United98.</a>
                <div className="itemconteiner">
                    <Person classname="icon"/>
                    <span>+62 898 5558 169</span>                
                    </div>
                <div className="itemconteiner">
                    <Mail classname="icon"/>
                    <span>Fadlyferdiansyah14@gmail.com</span>                
                    </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>

            </div>
        </div>
    )
}
