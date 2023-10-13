import { Link } from "react-router-dom";

const HomePage = ()=>{
    return(
        <main className="flex flex-col justify-center w-screen text-center h-screen">
            <h1 className="text-orange-500 font-bold text-[40px]">BIENVENIDO</h1>
            <Link to={'/login'}><button>Ir a login</button></Link>
        </main>
    )
}
export default HomePage;