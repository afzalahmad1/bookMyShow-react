import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

const FetchData = () => {
  const [show, setShow] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    axios("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));

  },[]) 
    
   // localStorage.setItem("Show",JSON.stringify(show))
    

   const showSummary =(desc)=> {
   // console.log(desc)
    navigate("/summary",{state :{movieDetails:desc}})

   }
   





  return (
    <div>

      <div className="show-details">
        {show.map((item) => {
          return (
            <div className="item" key={item.show.id}>
              <h1>Show Name : {item.show.name}</h1>

              <img src={item.show.image.original} alt="Show"  className="show-img"/>

              <p>Id : {item.show.id}</p>

              <p>Language : {item.show.language}</p>

              <p >Genres : {item.show.genres.map((gen,idx)=>{
                return(
                    <span key={idx}>{gen},</span>
                )
              })}</p>

              <p>Runtime : {item.show.runtime}</p>

              <p>Premiered : {item.show.premiered}</p>

              <p>Rating : {item.show.rating.average}</p>

              <button className="btn" type="button" onClick={()=> showSummary(item.show)}>Summary</button>
            </div>
          );
        })}
      </div>

    </div>
  );


};

export default FetchData;
