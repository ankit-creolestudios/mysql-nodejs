import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addUser } from "../../redux/slice/users";
import { ADD_USER } from "../../redux/types";
import { nanoid } from "@reduxjs/toolkit";
const MyForm = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      MyForm
      <div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
            dispatch(
              addUser({ type: ADD_USER, user: { ...values, id: nanoid(8) } })
            );
          }}
        >
          {() => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;
