import React, {useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col,Row ,form} from "reactstrap";
import "./login.css";
import colorgreen from "../../../assets/img/icon/colorgreen.png";
import logo from "../../../assets/img/icon/img.png";

const authAPI = 'http://localhost:8000/auth/login'

const Login = props => {

  const [datauser, setUser] = useState({});  //จากinput
  console.log(datauser);

const login = async () => {


  let res = await axios.post(authAPI, datauser);

  console.log("res",res.data.success);
  if (res.data.success){
       alert("Login Success");
       props.history.push("/users");
  }
  else{      
    alert("username หรือ password คุณป้อนไม่ถูกต้อง");
  }


};


  return (
    <div className="back">
      <Row>
        <Col>
          <div>
            <img src={colorgreen} alt="logocar" className="img" />
          </div>
        </Col>

        <Col>
          <form className="box">
            <div className="img">
              <img src={logo} alt="logocar" />
            </div>
            <div className="form-group">
              <input
                type="username"
                className="form-control"
                placeholder="Username"
                onChange={(e) => setUser({...datauser,username: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setUser({...datauser,password: e.target.value})}
              />
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
              <p className="forgot-password text-right">
                Forgot <small href="#" className="text-primary">password?</small>
              </p>
            </div>

            <button id="bnt1" onClick={login} >Login</button>
            <Link to="/register">
              <button id="bnt2" >Sing up</button>
            </Link>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
