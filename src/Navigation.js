import{NavLink} from "react-router-dom"


const Navigation=()=>{
    return(
        <>
        <NavLink
        to="/">home
        </NavLink><br></br>
        
        <NavLink
        to="/education">education
        </NavLink><br></br>

        <NavLink
        to="/skill">skill
        </NavLink><br></br>

        <NavLink
        to="/contact">contact
        </NavLink><br></br>

        <NavLink
        to="/problem">problem
        </NavLink><br></br>

        <NavLink
        to="/problem2">problem
        </NavLink><br></br>
        </>

        
    )
}
export default Navigation