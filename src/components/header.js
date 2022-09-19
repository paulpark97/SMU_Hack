
import '../App.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>
        <header className="App-header" >
            <div>
            <h1 className='App-heading' >
                <Link to="/" className='App-heading' style={{ textDecoration: 'none' }}>
                Vibe Check
                </Link>
            </h1>
            </div>
            <div style={{position:"absolute",left:"85%"}}>
                <h1>
                <Link to="/about" className='App-heading2'>
                    About
                    </Link>
                </h1>
                </div>
        </header>
      </div>
    )
}
export default Header