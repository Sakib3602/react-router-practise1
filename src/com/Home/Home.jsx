import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Foot from "../Foot/Foot.jsx";


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <h1>Hello this is home</h1>
            <Outlet></Outlet>
            <Foot></Foot>
            
        </div>
    );
};

export default Home;