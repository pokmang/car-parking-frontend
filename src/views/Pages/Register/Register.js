import React, { useEffect, useState, Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

import "./register.css";

const Register = (props) => {
  const [formData, setformData] = useState({});

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <h1 className="title">Register</h1>
                  <p className="text-muted" className="title">
                    ลงทะเบียนระบบจอดรถ
                  </p>

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
                        setformData({ ...formData, firstname: e.target.value })
                      }
                    />
                    <Input
                      type="text"
                      placeholder="นามสกุล"
                      onChange={(e) =>
                        setformData({ ...formData, lastname: e.target.value })
                      }
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user-following"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="ชื่อเล่น" />
                    <InputGroupText>
                      <i className="icon-calendar"></i>
                    </InputGroupText>
                    <Input type="number" placeholder="อายุ" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-phone"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="เบอร์โทร" />
                    <InputGroupText>
                      <i className="icon-screen-smartphone"></i>
                    </InputGroupText>
                    <Input type="number" placeholder="LINE" />
                  </InputGroup>

                  <small>ที่อยู่ปัจจุบัน</small>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-home"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="หมู่บ้าน" />
                    <Input type="text" placeholder="ตำบล" />
                    <Input type="text" placeholder="อำเภอ" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <i className="icon-globe"></i>
                    </InputGroupText>
                    <Input type="text" placeholder="ประเทศ" />
                    <Input type="text" placeholder="รหัสไปรษณีย์" />
                  </InputGroup>

                  <Button color="success" block>
                    Create Account
                  </Button>
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
