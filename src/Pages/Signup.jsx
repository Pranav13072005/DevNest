import "./Signup.css";
import facebook from "./facebook1.png";
import g from "./g+.png";
import linked from "./linkedin.png";
import Navbar from "../Navbar";
import ParticlesComponent from "../components/Particles";
export default function Signup(){
    return(
        <div>
            <Navbar/>
            <ParticlesComponent id="particles"/>
        <div className="login-container">
        <div className="login-right">
                    <h1 className="new-header">Welcome Back!</h1>
                    <p className="new-content">To keep connected with us please</p>
                    <p className="new-content-2">login with your personal info</p>
                    <a href = "./Login" className="nodecor"><button className="signup">Sign in</button></a>
                </div>
                <div className="login">
                    <h1 className="header-text">Create Account</h1>
                    {/* <p className="header-text-light">Use social networks</p> */}
                    <div className="icons">
                        <a href="https://www.facebook.com/"><img className = "logo1" src = {facebook} alt="logo" width={30} height={30}></img></a>
                        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AaSxoQwGUmsayzuC80iIAErA0CzvFvKH7B3Fze-8eN2KXhqUKtFxjCdW5UfOszBUTP2__kKIvr_s&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1577679133%3A1715833514176722&ddm=0"><img className = "logo1" src = {g} alt="logo" width={30} height={30}></img></a>
                        <a href="https://www.facebook.com/"><img className = "logo1" src = {linked} alt="logo" width={30} height={30}></img></a>
                    </div>
                    <div class="or-section">
                        <div class="line"></div>
                        <div class="or-text">Or use your email for your registration</div>
                        <div class="line"></div>
                    </div>
                    <div className="name2">
                        <input placeholder="Name" type="text" className="enteremail"></input>
                    </div>
                    <div className="email">
                        <input placeholder="Email" type="text" className="enteremail"></input>
                    </div>
                    <div className="password">
                        <input placeholder="Password" type="text" className="enteremail"></input>
                    </div>
                    <button className="signin">Sign up</button>
                </div>
                
            </div>
        </div>
    )
}