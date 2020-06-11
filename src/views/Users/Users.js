import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";

import Update from "../Pages/Register/update";
const getAPI = "http://localhost:8000/users/getusers";
const updateAPI = "http://localhost:8000/users/updateuser";

const Users = () => {
  const [user, setUser] = useState([]);
  const [visibleupdate, setvisibleupdate] = useState(false);
  const [selectuser, setselectuser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  
  const showModalUpdate = async (user) => {
    await setselectuser(user);
    setvisibleupdate(true);
  };

  const handleOkUpdate = async (id) => {
    
    selectuser["address"] = {
      village: selectuser.village,
      subDistrict: selectuser.subDistrict,
      district: selectuser.district,
      province: selectuser.province,
      postalCode: selectuser.postalCode,
      country: selectuser.country,
    };
    delete selectuser.village;
    delete selectuser.subDistrict;
    delete selectuser.district;
    delete selectuser.province;
    delete selectuser.postalCode;
    delete selectuser.country;
      // console.log(selectuser);
      
    await axios.patch(`${updateAPI}/${id}`, selectuser);

      // console.log(res.data);
      setvisibleupdate(false);
      fetchData();
   
  };

  const handleCancelUpdate = (e) => {
    setvisibleupdate(false);
  };
  const fetchData = async () => {
    let resdata = await axios.get(getAPI);

    if (resdata.data.success) {
      setUser(resdata.data.users);
      console.log("set", resdata.data.users);
    } else {
      return <div>data error</div>;
    }


  };

  const deluser = async (id) => {
      await axios.delete(
      `http://localhost:8000/users/deleteuser/${id}`
    );
    fetchData();
  };

  const renderList = () => {
    //จะแยกส่วน th นอก loop
    return user.map((v) => {
      return (
        <tr key={v}>
          <th scope="row">{v.id}</th>
          <td>
            {v.name} {v.surname}
          </td>
          <td>{v.nickname}</td>
          <td>{v.age}</td>
          <td>{v.phoneNumber}</td>
          <td>{v.line}</td>
          <td>{v.email}</td>
          <td>
            บ้านเลขที่ {v.houseNo} หมู่{v.village} ต.
            {v.subDistrict} อ.{v.district} จ.
            {v.province} {v.country}
            {v.postalCode}
          </td>
          <td className="btn_setting d-flex justify-content-between">
            <button
              className="btn1"
              onClick={() => {
                deluser(v.id);
              }}
            >
              DELETE
            </button>
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button> */}
            <button className="btn2" onClick={() => showModalUpdate(v)}>
              UPDATE
            </button>
          </td>
        </tr>
      );
    });
  };
  // console.log(selectuser);

  return (
    <div>
      <Update
        handleOkUpdate={handleOkUpdate}
        handleCancelUpdate={handleCancelUpdate}
        visibleupdate={visibleupdate}
        user={selectuser}
        setuser={setselectuser}
      />

      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th className="name">Name</th>
            <th className="nickname">Nickname</th>
            <th className="age">Age</th>
            <th>PhoneNumber</th>
            <th>Line</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>จัดการ USER</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </table>
    </div>
  );
};

export default Users;
