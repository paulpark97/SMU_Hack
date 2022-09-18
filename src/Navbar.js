import {  Link } from "react-router-dom";

const Navbar= () =>{
    return (
    <div className="nav">
        <div className="Site-title">
            <text>
                Vibe Check
            </text>
        </div>
        <ul>
            <li>
                <Link className="nav-link" to="/">
                    <text className="Nav-link">
                        Home
                    </text>
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/about">
                    <text className="Nav-link">
                        About
                    </text>
                </Link>
            </li>
        </ul>
        </div>
    );
}

export default Navbar

// function Navbar(){
//     return (
//         <div>
//             <nav className="nav">
//                 <div className="Site-title">
//                     <text>
//                         Project Name
//                     </text>
//                 </div>
//                 <div>
//                     <ul>
//                         <li className="active"> 
//                             <a href="/home">
//                                 <text className="Nav-link">
//                                     Home
//                                 </text>
//                             </a>
//                         </li>
//                         <li> 
//                             <a href="/about">
//                                 <text className="Nav-link">
//                                     About
//                                 </text>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }

