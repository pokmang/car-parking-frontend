import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col,Row ,form} from "reactstrap";
import "./login.css";
import colorgreen from "../../../assets/img/icon/colorgreen.png";
import logo from "../../../assets/img/icon/img.png";
const Login = props => {

  const [datauser, setUser] = useState();  //จากinput
  const [getuser, setgetuser] = useState(); //จาก backend
  console.log("testget",getuser);
  console.log("testinput",datauser);

  const fetchData = async () => {
    let res = await axios.get("http://localhost:8000/users/getusers");
    setgetuser(res.data.data) //เก็บค่าไวใน usestate
    console.log("test",res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const logins = (props) => {
    
    //ยังไม่เข้าเงือนไข
    if(datauser.email === getuser.email && datauser.password === getuser.password){
        alert('Login Success')
        props.history.push("/dashboard");
    }else{
        alert('Not found user')
    }
}



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
                onChange={(e) => setUser({...datauser,email: e.target.value})}
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
                Forgot <a href="#">password?</a>
              </p>
            </div>

            <button id="bnt1" onClick={logins}>Login</button>
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
