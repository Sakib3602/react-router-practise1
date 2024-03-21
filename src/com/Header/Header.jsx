import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>

            <h1>This is Header.</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/user'>User</Link>
                <Link to='/swiper'>Swipper</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/rechart'>ReChart</Link>
                
            </nav>
            
        </div>
    );
};

export default Header;