import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    return(
        <>
            <h2>Contact Component</h2>
            <ul><li><button><Link to={`/`}>Back</Link></button></li></ul>
        </>
    )
}

export default Contact