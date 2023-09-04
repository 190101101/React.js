import {Link} from 'react-router-dom';

const Header = () => {
    return <header>
        <ul>
            <li>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </header>
}

export default Header;