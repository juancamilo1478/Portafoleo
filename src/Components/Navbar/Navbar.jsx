import { useNavigate } from "react-router-dom"
import "./Navbar.scss"

const Navbar=()=>{
const navigate=useNavigate()
return <div className="containerNavbar">
    <div className="textNavbar">
        <h2 onClick={() => navigate('/')}>Cv</h2>
    <h2 onClick={()=>navigate('/about')}>Sobre mi</h2>
    <h2 onClick={()=>navigate("/experience")}>Experiencia</h2>
    <h2 onClick={()=>navigate('/proyects')}>Proyectos</h2>
    <h2 onClick={()=>navigate('/contact')}>Contactame</h2>
    </div>
</div>
}
export default Navbar