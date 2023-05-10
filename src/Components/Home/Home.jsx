// import { useDispatch, useSelector } from "react-redux"
// import { incrementCounter } from "../../app/actions/counterActions"
import "./Home.scss"
// icons react icons
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs"
import { AiOutlineGithub,AiFillLinkedin } from "react-icons/ai"
import {  useNavigate } from "react-router-dom"


const Home=()=>{
  const navigate = useNavigate()
//     const {value} = useSelector(state => state.counter)
// const dispatch=useDispatch()
 
// const handleBoton=()=>{
//   dispatch(incrementCounter())
// }

return <div className="Home">
  <div className="HomeContainer">
  <h2>Juan camilo saiz</h2>
  <h3>Full stack developer</h3>
    <p>Programar es mi pasión mejorando cada dia </p>
  <div className="iconsHome">
  <AiOutlineGithub className="iconHome"/>
      <AiFillLinkedin className="iconHome" />  
      <h4 onClick={()=>navigate("/pdf")}> <BsFillFileEarmarkArrowDownFill className="iconCv" />Descargar Cv</h4>

  </div>
   
  </div>
 {/* <p>{value}</p> 
<button onClick={handleBoton}>oprime</button> */}
</div>
}
export default Home