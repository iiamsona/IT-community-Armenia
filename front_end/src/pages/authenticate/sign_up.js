import {FormSignUp, FormLogo } from "../../components/authenticate/authenticate.js"
import "./styles/authenticate.css"
function SignUp(){
    return (
        <div className="authenticate">
            <FormSignUp/>
            <FormLogo/>
        </div>
    )
}

export default SignUp;