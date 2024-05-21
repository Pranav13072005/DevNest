import "./Login.css";
import Navbar from "../../Navbar";
import facebook from "../facebook1.png";
import g from "../g+.png";
import linked from "../linkedin.png";
import ParticlesComponent from "../../components/Particles";

export default function Login(){
    return(
        <div className="body">
            <Navbar/>
            <ParticlesComponent id="particles" />
            <div className="login-container">
                <div className="login">
                    <h1 className="header-text">Login to Your Account</h1>
                    <p className="header-text-light">Login using social networks</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/"><img className = "logo1" src = {facebook} alt="logo" width={30} height={30}></img></a>
                        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AaSxoQwGUmsayzuC80iIAErA0CzvFvKH7B3Fze-8eN2KXhqUKtFxjCdW5UfOszBUTP2__kKIvr_s&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1577679133%3A1715833514176722&ddm=0"><img className = "logo1" src = {g} alt="logo" width={30} height={30}></img></a>
                        <a href="https://www.facebook.com/"><img className = "logo1" src = {linked} alt="logo" width={30} height={30}></img></a>
                    </div>
                    <div class="or-section">
                        <div class="line"></div>
                        <div class="or-text">OR</div>
                        <div class="line"></div>
                    </div>
                    <div className="email">
                        <input placeholder="Email" type="text" className="enteremail"></input>
                    </div>
                    <div className="password">
                        <input placeholder="Password" type="password" className="enteremail"></input>
                    </div>
                    <button className="signin">Sign in</button>
                </div>
                <div className="login-right">
                    <h1 className="new-header center">New Here?</h1>
                    <p className="new-content center">Sign up and discover a</p>
                    <p className="new-content-2 center"> great amount of opportunities !!</p>
                    <a href="./Signup" className="nodecor"><button className="signup">Sign up</button></a>
                </div>
            </div>
        </div>
    )
}