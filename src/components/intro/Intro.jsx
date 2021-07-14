import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings:["Mahasiswa","Politeknik Pos Indonesia"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgConteiner">
                    <img src="assets/anjas.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hallo semua , Saya</h2>
                    <h1>Fadly Ferdiansyah Kurnia</h1>
                    <h3>Profession <span ref={textRef}></span></h3>
                
                <a href="#portofolio">
                    <img src="assets/down.png" alt=""/>
                </a>
                </div>
                </div>
        </div>
    )
}
