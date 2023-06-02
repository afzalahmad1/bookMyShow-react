
import { useNavigate } from 'react-router-dom'
import image from '../../assets/home.png'
import './home.css'
const Home = ()=>{
    const navigate = useNavigate()

    function signupForm(){
        navigate("/signup")
    }

    function loginForm(){
        navigate("/login")
    }

    return(
        <div className='container'>
            <h1 id='heading'>WELCOME TO MY PAGE</h1>
            <div className='homeBtn'>
                <button onClick={signupForm}>Sign Up</button>
                <br />
                <br />
                <button onClick={loginForm}>Login</button>
            </div>
            <img src={image} alt="home"  />
        </div>
    )
}
export default Home;