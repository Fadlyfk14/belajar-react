import "./portofolio.scss"

export default function Portofolio() {
    return (
        <div className="portofolio" id="portofolio">
            <h1>Portofolio</h1>
            <ul>
                <li className="active">Photos</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="./assets/men.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}
