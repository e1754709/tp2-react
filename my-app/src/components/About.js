import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="about">
            <h4>About App</h4>
            <p>Version 1.0.0</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About