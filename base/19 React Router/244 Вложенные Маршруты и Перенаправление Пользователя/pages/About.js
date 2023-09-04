import {Link} from 'react-router-dom';

const About = () => {
    return (
        <section>
            <h1>About page</h1>
            <Link to="/contact">Contact Us</Link>
        </section>
    );
}

export default About;