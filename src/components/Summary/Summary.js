import { useLocation, useNavigate } from "react-router-dom";
import './summary.css'


const Summary = ()=>{

    const location = useLocation();

    const navigate = useNavigate();
 //  console.log(location.state.movieDetails.summary)

   function formPage(show){
    navigate("/form",{state : show})
   }

    return(
        <div className="summary">
            <h1>Show Name : {location.state.movieDetails.name}</h1>
            <h3>SUMMARY</h3>
            <p>{location.state.movieDetails.summary}</p>

            <button type="button" onClick={()=>formPage(location.state.movieDetails)}>Book Ticket</button>

        </div>
    )
}
export default Summary;