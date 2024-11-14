import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return(
        <>
            <h2>About Component</h2>
            <ul><li><button><Link to={`/`}>Back</Link></button></li></ul>
        </>
    )
}

export default About