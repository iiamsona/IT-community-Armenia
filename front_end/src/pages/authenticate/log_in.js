import React from "react"
import { FormLogIn, FormLogo } from "../../components/authenticate/authenticate.js"
import "./styles/authenticate.css"
function LogIn(){
    return (
        <div className="authenticate">
            <FormLogo/>
            <FormLogIn/>
            
        </div>
    )
}

export default LogIn