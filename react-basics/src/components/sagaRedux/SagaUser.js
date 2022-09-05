import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  getUserName,
  setUser,
  setUserByName,
} from "../../store/feature/userSlice";
import { getPostAction } from "../../store/feature/postSlice";
const SagaUser = () => {
  const [name, setName] = useState("");
  const dispath = useDispatch();

  const state = useSelector((state) => state.user);

  console.log(state);

  useEffect(() => {
    // dispath(getUser());
    dispath(getPostAction());
  }, [dispath]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name !== "") {
  //     dispath(setUserByName(name));
  //   }
  // };
  return (
    <div>
      SagaUser
      <div>
        {/* <form>
          <div>
            <lable>Search:</lable>
            <input
              type={"text"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <span>
            <button type="submit">Search</button>
          </span>
        </form> */}
      </div>
      <div>
        <Row>
          {state &&
            state?.results?.map((user) => {
              return (
                <Col span={8}>
                  <Card
                    title="User card"
                    style={{
                      width: 300,
                    }}
                  ></Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default SagaUser;
