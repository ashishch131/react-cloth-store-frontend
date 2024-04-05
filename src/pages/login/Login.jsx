import "./login.css"

const Login = () => {
  return (
      <div className='login'>
          <form className="loginForm">
              <h1 className="loginTitle">SIGN IN</h1>
              <input className="loginInput" type="text" placeholder='username' autoFocus />
              <input className="loginInput" type="password" placeholder='password' />
              <button className="loginBtn">LOGIN</button>
              <span className="forgot">DO NOT YOU REMEMBER THE PASSWORD?</span>
              <span className="newAcc">CREATE NEW ACCOUNT</span>
          </form>
    </div>
  )
}

export default Login