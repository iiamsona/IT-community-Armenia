import { NavLink, useNavigate } from "react-router-dom"
// importing pictures
import facebook from "../../assets/images/social_media/facebook.svg";
import google from "../../assets/images/social_media/google.svg";
import mail from "../../assets/images/form_inputs/mail.svg"
import user from "../../assets/images/form_inputs/user.png";
import password from "../../assets/images/form_inputs/password.svg";
import form_logo from "../../assets/images/logos/ProdNote.svg"
// importing components
import Title from "./title.js";
import Input from "./input.js";
import Button from "../button/button.js";
import SocialMedia from "./social_media_button.js";
import { useState } from "react";

function FormLogIn () {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password:''

  })

  const handleChange = (event)=>{
    let name = event.target.name
    let value = event.target.value

    setUser({...user, [name]:value})
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const {username, email, password} = user

    try{
      const res = await fetch('/login',{
        method : "POST",
        headers : {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        username, email, password
      })
      })

      if(res.status == 400 || !res){
        console.log("Incorrect details")
      }else{
        console.log("Logged in")
        window.location.reload()
      }
    }catch(error){
      console.log(error)
    }
  }

    return (
      <div className="form_container">
        <form onSubmit={handleSubmit} className="form">
          <Title p="Welcome to ProdNote, log in to continue your journey" />
          <Input img={user} type="email" txt="Email" name="email" value={user.email} onChange={handleChange}/>
          <Input img={password} type="password" txt="Password" name="password" value={user.password} onChange={handleChange} />
          <Button className="authenticate_btn" txt="Log In" type="submit"/>
          <p className="or">or</p>
          <div className="social_media_div">
            <SocialMedia
            img={google}
            txt="Log in with Google  "
            href="https://myaccount.google.com/"
            className="google_log_in_btn"
          />
          <SocialMedia
            img={facebook}
            txt="Log in with Facebook"
            href="https://www.facebook.com/login"
            className="facebook_log_in_btn"
          />
          </div>
          <p className="forgot_password">
            <NavLink to="/forgot_password">Forgot password?</NavLink>
          </p>
          <p className="create_an_account">
          Don’t have an account yet? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </form>
      </div>
    );
  }

  function FormSignUp () {

    const navigate = useNavigate();

    const [user, setUser] = useState({
      username: "",
      email: "",
      password: ""
    })

    const handleInput = (event)=>{
      let name = event.target.name;
      let value = event.target.value;

      setUser({...user, [name]: value})
    }

    const handleSubmit = async (event) =>{
      event.preventDefault();

      const {username, email, password} = user;

      try{
        const res = await fetch('/register', {
          method: "POST",
          headers:{
            "Content-type" : "application/json"
          },
          body: JSON.stringify({
            username, email, password
          })
        })

        if(res.status == 400 || !res){
          console.log("Already used detals")
        }else{
          console.log("Registered succesfully")
          navigate('/login')
        }

      }catch(error){
        console.log(error)
      }
    }

    return (
      <div className="form_container">
        <form className="form" onSubmit={handleSubmit} method="POST">
          <Title h1="SIGNUP" />
          {/* need to make a name for my input */}
          <Input img={user} txt="Name" name="name" value={user.name} onChange={handleInput}/> 
          {/* <Input img={user} txt="Username" name="username" value={user.username} onChange={handleInput} /> */}
          <Input img={mail} txt="Mail" name="email" value={user.email} onChange={handleInput} />
          <Input img={password} txt="Password" name="password" value={user.password} onChange={handleInput} />
          <Input img={password} txt="Confirm Password" />
          <Button className="authenticate_btn" txt="SignUp Now" type="submit" />
          <SocialMedia
            img={google}
            txt="LogIn with Google"
            href="https://myaccount.google.com/"
            className="google_log_in_btn"
          />
          <SocialMedia
            img={facebook}
            txt="LogIn with Facebook"
            href="https://www.facebook.com/login"
            className="facebook_log_in_btn"
          />
          <h5 className="create_an_account">
            alredy have an account? <NavLink to="/login">login</NavLink>
          </h5>
          </form>
        </div>
    );
  }

  function FormForgotPassword (){
    return(
      <div className="form_container">
        <div className="form">
          <Title h1="" />
          <Input img={user} txt="Type your email or username" />
          <Button className="authenticate_btn" txt="SEND" />
        </div>
      </div>
    )
  }

  function FormLogo(){
    return(
      <div className="form_logo">
        <img src={form_logo}></img>
    </div>
    )
  }

export {FormLogIn, FormSignUp, FormLogo, FormForgotPassword};
