import { Link } from "react-router-dom";

const HomePage = () => {
    return <div>
        <h1>Home</h1>
        <Link to={"/404"}>Go To 404</Link>
    </div>
    

}

export default HomePage;