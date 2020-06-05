import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import logo from '../../../assets/img/icon/logodigital.png'
import "./register.css";

const Register = props => {


  const dispatch = useDispatch()
  const form = useSelector(state => state.form)
  const users = useSelector(state => state.user)


  const createuser = async () => {
    console.log(form);
    
    await axios.post(`http://localhost:8000/users/addUser`, form)
    dispatch({
        type: 'ADD_USER', user: {
            ...form
        }
        
    })
    alert('Create Success')
    // props.history.push('/dashboard')
}



  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <div className="title">
                    <img src={logo} alt="logo"  />
                  </div>
                  
                  <h4 className="text-muted" >
                  Register
                  </h4>
                  <small>ข้อมูลส่วนตัว</small>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="ชื่อ"
                      onChange={(e) =>
                        dispatch({ type: 'CHANGE_name',  data: { name: e.target.value}} )
                      }
                    />
                   
                    <Input
                      type="text"
                      placeholder="นามสกุล"
                      onChange={(e) =>
                        dispatch({ type: 'CHANGE_surname',  data: { surname: e.target.value}} )
                      }
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user-following"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      type="text" 
                      placeholder="ชื่อเล่น"
                      onChange={(e) =>
                        dispatch({ type: 'CHANGE_nickname',  data: { nickname: e.target.value}} )
                      } />
                    <InputGroupText>
                      <i className="icon-calendar"></i>
                    </InputGroupText>
                    <Input type="number" placeholder="อายุ"
                    onChange={(e) =>
                      dispatch({ type: 'CHANGE_age',  data: { age: e.target.value}} )
                    } />
                  </InputGroup>
                  <small>ข้อมูลติดต่อ</small>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-phone"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="เบอร์โทร"
                    onChange={(e) =>
                      dispatch({ type: 'CHANGE_phoneNumber',  data: { phoneNumber: e.target.value}} )
                    } />
                    <InputGroupText>
                      <i className="icon-screen-smartphone"></i>
                    </InputGroupText>
                    <Input type="number" placeholder="LINE"
                    onChange={(e) =>
                      dispatch({ type: 'CHANGE_line',  data: { line: e.target.value}} )
                    } />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-envelope-letter"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="email" placeholder="E-mail"
                    onChange={(e) =>
                      dispatch({ type: 'CHANGE_email',  data: { email: e.target.value}} )
                    } />
                  </InputGroup>

                  <small>ที่อยู่ปัจจุบัน</small>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-home"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="บ้านเลขที่"
                    onChange={(e) =>
                      dispatch({ type: 'CHANGE_houseNo',  data:  { houseNo: e.target.value}})
                    } />
                    <Input type="text" placeholder="หมู่บ้าน"
                    onChange={(e) =>
                      dispatch({ type: 'CHANGE_village',  data:  { village: e.target.value}})
                    } />
                    <Input type="text" placeholder="ตำบล" 
                     onChange={(e) =>
                      dispatch({ type: 'CHANGE_subDistrict',  data: {  subDistrict: e.target.value}} )
                    }/>
                    <Input type="text" placeholder="อำเภอ"
                     onChange={(e) =>
                      dispatch({ type: 'CHANGE_district',  data: { district: e.target.value}} )
                    } />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <i className="icon-globe"></i>
                    </InputGroupText>
                    <Input type="text" placeholder="จังหวัด"
                     onChange={(e) =>
                      dispatch({ type: 'CHANGE_province',  data: {  province: e.target.value}} )
                    } />
                    <Input type="text" placeholder="ประเทศ"
                     onChange={(e) =>
                      dispatch({ type: 'CHANGE_country',  data: {  country: e.target.value}} )
                    } />
                    <Input type="text" placeholder="รหัสไปรษณีย์"
                     onChange={(e) =>
                      dispatch({ type: 'CHANGE_postalCode',  data: {  postalCode: e.target.value}} )
                    } />
                  </InputGroup>
                  <div className="btn">
                     <Button color="success"  onClick={createuser}>
                    Create Account
                  </Button>
                    </div>    
                 
                  {/* <div onClick={deleteuser}>Delete</div> */}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
