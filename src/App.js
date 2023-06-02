import { Routes ,Route} from "react-router-dom";
import FetchData from "./components/Fetching-Data/FetchData";
import Summary from "./components/Summary/Summary";
import FormData from "./components/Form/FormData";
import Home from "./components/Home/Home"
import Signup from "./components/Signup/Signup";
import LoginPage from "./components/Login/LoginPage"



const App = ()=>{

  return(
    <div>
      <Routes>
        <Route  path="/"  element ={<Home />}/>
        <Route  path="/signup"  element ={<Signup />}/>
        <Route  path="/login"  element ={<LoginPage />}/>
        <Route  path="/fetch-data"  element ={<FetchData />}/>
        <Route  path="/summary"  element ={<Summary />}/>
        <Route  path="/form"  element ={<FormData />} />
        
  </Routes>
    </div>
  )
}
export default App;
