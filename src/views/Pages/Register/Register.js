import React ,{useState}from "react";
import axios from "axios";
import colorgreen from "../../../assets/img/icon/colorgreen.png";
import {Card,CardBody,Col,Container,Form,Input,InputGroup,InputGroupAddon,InputGroupText,Row,} from "reactstrap";
import logo from "../../../assets/img/icon/logodigital.png";
import "./register.css";
const userAPI = 'http://localhost:8000/users/createuser'


const Register = (props) => {

  const [data , setdata] = useState({})


  const createuser = async () => {

    console.log(data);
    

    let res = await axios.post(userAPI, data);
    console.log("res",res.data.message);
    
    if (res.data.message === 'username must be longer than 4'){
        alert("username ต้องมากกว่า 4 ตัว'");
    }
    else if (res.data.message === 'password must be longer than 6'){
      alert("password ต้องมากกว่า 4 ตัว");
    }
    else if (res.data.message === 'this username already exists'){
      alert("มี username นี้อยู่แล้ว");
    }
    else if (res.data.message === 'wrong password'){
      alert("รหัสไม่ตรงกัน");
    }
    else{     
      alert("Create Success");
      props.history.push("/users");
    }

  };
  console.log(data);
  return (
    <div className="back">
      <Row>
        <Col >
          <div>
            <img src={colorgreen} alt="logocar" className="img" />
          </div>
        </Col>
        <Col >
          <div className="app flex-row align-items-baseline">
            <Container>
              <Row className="justify-content-start">
                <Col md="9" lg="7" xl="6">
                  <Card className="mx-4" id="card">
                    <CardBody className="p-4">
                      <Form>
                        <div className="title">
                          <img src={logo} alt="logo" />
                        </div>
                        <h4 className="text-muted">Register</h4>
                        <small>ข้อมูลบัญชี</small>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Username"onChange={(e) => { setdata({...data , username : e.target.value})}}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password"onChange={(e) => { setdata({...data , password : e.target.value})}}/>
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password"  placeholder="confirmPassword"onChange={(e) => { setdata({...data , confirmPassword : e.target.value})}}/>
                        </InputGroup>
                        
                        <small>ข้อมูลส่วนตัว</small>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="ชื่อ" onChange={(e) =>  { setdata({...data , name : e.target.value})}}/>  
                          <Input type="text" placeholder="นามสกุล" onChange={(e) =>  { setdata({...data , surname : e.target.value})}}/>
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user-following"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="ชื่อเล่น" onChange={(e) =>  { setdata({...data , nickname : e.target.value})}}/>
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                          <Input type="number" placeholder="อายุ" onChange={(e) => { setdata({...data , age : e.target.value})}} />
                        </InputGroup>

                        <small>ข้อมูลติดต่อ</small>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="เบอร์โทร" onChange={(e) =>  { setdata({...data , phoneNumber : e.target.value})}}/>
                          <InputGroupText>
                            <i className="icon-screen-smartphone"></i>
                          </InputGroupText>
                          <Input type="text" placeholder="LINE"  onChange={(e) => { setdata({...data , line : e.target.value})}}/> 
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-envelope-letter"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="email" placeholder="E-mail" onChange={(e) => { setdata({...data , email : e.target.value})}}/>
                        </InputGroup>

                        

                        <small>ที่อยู่ปัจจุบัน</small>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-home"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="บ้านเลขที่ หมู่" onChange={(e) =>  { setdata({...data , address : {...data.address,village:e.target.value}})}}/>
                          <Input type="text" placeholder="ตำบล" onChange={(e) => { setdata({...data , address : {...data.address,subDistrict:e.target.value}})}}/>
                          <Input type="text" placeholder="อำเภอ" onChange={(e) => { setdata({...data , address : {...data.address,district:e.target.value}})}}/>
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroupText>
                            <i className="icon-globe"></i>
                          </InputGroupText>
                          <Input type="text" placeholder="จังหวัด" onChange={(e) => { setdata({...data , address : {...data.address,province:e.target.value}})}}/>                          
                          <Input type="text" placeholder="ประเทศ" onChange={(e) => { setdata({...data , address : {...data.address,country:e.target.value}})}}/> 
                          <Input type="text" placeholder="รหัสไปรษณีย์" onChange={(e) =>  { setdata({...data , address : {...data.address,postalCode:e.target.value}})}}/>
                        </InputGroup>
                        <div className="tag_input">
                          <button id="bnt2" onClick={createuser}> Sing up</button> 
                          <button id="bnt1" onClick = {()=>props.history.push('/login')}>Login</button>
                          
                        </div>
                        
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
