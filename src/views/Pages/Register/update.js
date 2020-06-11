import React from "react";
import { Modal} from "antd";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";



const Update = (props) => {

  return (
    <Modal
      title="UPDATE DATA"
      visible={props.visibleupdate}
        onOk={()=>props.handleOkUpdate(props.user.id)}
      onCancel={props.handleCancelUpdate}
    >

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
          value={props.user.name}
          onChange={(e) => {
            props.setuser({ ...props.user, name: e.target.value });
          }}
        />
        <Input
          type="text"
          placeholder="นามสกุล"
          value={props.user.surname}
          onChange={(e) => {
            props.setuser({ ...props.user, surname: e.target.value });
          }}
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
          value={props.user.nickname}
          onChange={(e) => {
            props.setuser({ ...props.user, nickname: e.target.value });
          }}
        />
        <InputGroupText>
          <i className="icon-calendar"></i>
        </InputGroupText>
        <Input
          type="number"
          placeholder="อายุ"
          value={props.user.age}
          onChange={(e) => {
            props.setuser({ ...props.user, age: e.target.value });
          }}
        />
      </InputGroup>

      <small>ข้อมูลติดต่อ</small>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="icon-phone"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="text"
          placeholder="เบอร์โทร"
          value={props.user.phoneNumber}
          onChange={(e) => {
            props.setuser({ ...props.user, phoneNumber: e.target.value });
          }}
        />
        <InputGroupText>
          <i className="icon-screen-smartphone"></i>
        </InputGroupText>
        <Input
          type="text"
          placeholder="LINE"
          value={props.user.line}
          onChange={(e) => {
            props.setuser({ ...props.user, line: e.target.value });
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="icon-envelope-letter"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="email"
          placeholder="E-mail"
          value={props.user.email}
          onChange={(e) => {
            props.setuser({ ...props.user, email: e.target.value });
          }}
        />
      </InputGroup>

      <small>ที่อยู่ปัจจุบัน</small>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="icon-home"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="text"
          placeholder="บ้านเลขที่ หมู่"
          value={props.user.village}
          onChange={(e) => {
            props.setuser({
              ...props.user,
              village: e.target.value }
            );
          }}
        />
        <Input
          type="text"
          placeholder="ตำบล"
          value={props.user.subDistrict}
          onChange={(e) => {
            props.setuser({
              ...props.user,
              subDistrict: e.target.value
            });
          }}
        />
        <Input
          type="text"
          placeholder="อำเภอ"
          value={props.user.district}
          onChange={(e) => {
            props.setuser({
              ...props.user,
              district: e.target.value 
            });
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroupText>
          <i className="icon-globe"></i>
        </InputGroupText>
        <Input
          type="text"
          placeholder="จังหวัด"
          value={props.user.province}
          onChange={(e) => {
            props.setuser({
              ...props.user, province: e.target.value 
            });
          }}
        />
        <Input
          type="text"
          placeholder="ประเทศ"
          value={props.user.country}
          onChange={(e) => {
            props.setuser({
              ...props.user, country: e.target.value 
            });
          }}
        />
        <Input
          type="text"
          placeholder="รหัสไปรษณีย์"
          value={props.user.postalCode}
          onChange={(e) => {
            props.setuser({
              ...props.user,
             postalCode: e.target.value 
            });
          }}
        />
      </InputGroup>
    </Modal>
  );
};

export default Update;
