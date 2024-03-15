import React from "react"
import { FormForgotPassword, FormLogo } from "../../components/authenticate/authenticate.js"
import "./styles/authenticate.css"
function ForgotPassword(){
    return (
        <div className="authenticate">
            <FormForgotPassword/>
            <FormLogo/>
        </div>
    )
}

export default ForgotPassword