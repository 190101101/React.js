import {Link} from 'react-router-dom';

const Articles = () => {
    return (
        <section>
            <h1>Articles page</h1>
            <ul>
                <li>
                    <Link to='/articles/:1'>article 1</Link>
                </li>
                <li>
                    <Link to='/articles/:2'>article 2</Link>
                </li>
                <li>
                    <Link to='/articles/:3'>article 3</Link>
                </li>
            </ul>
        </section>
    );
}

export default Articles;