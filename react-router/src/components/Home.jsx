import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <h2>Home Component</h2>
            <ul><li><button><Link to={`/`}>Back</Link></button></li></ul>
        </>
    )
}

export default Home