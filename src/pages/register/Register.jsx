import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <form className="registerForm">
        <h1 className="rgstrTitle">CREATE AN ACCOUNT</h1>
        <div className="inputItems">
          <input className="rgstrLogin" type="text" placeholder="name" autoFocus/>
          <input className="rgstrLogin" type="text" placeholder="last name" />
          <input className="rgstrLogin" type="text" placeholder="username" />
          <input className="rgstrLogin" type="email" placeholder="email" />
          <input
            className="rgstrLogin"
            type="password"
            placeholder="password"
          />
          <input
            className="rgstrLogin"
            type="confirm password"
            placeholder="confirm password"
          />
        </div>
        <p className="rgstrDesc">
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <button className="rgstrBtn">CREATE</button>
      </form>
    </div>
  );
};

export default Register;
