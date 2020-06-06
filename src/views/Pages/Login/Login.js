import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import './login.css' ;
import colorgreen from "../../../assets/img/icon/colorgreen.png";
import logo from "../../../assets/img/icon/img.png";
const Login = () => {
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
            <img src={logo} alt="logocar"  />
          </div>
        

                <div className="form-group">
                  
                    <input type="email" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                   
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                    </div>
               
                
            
                <button  className="bnt1">Login</button>
<Link to="/register">
                <button className="bnt2">Sing up</button>
       </Link>     
               
            </form>
            
            
        </Col>
      </Row>
    </div>
  );
};

export default Login;
