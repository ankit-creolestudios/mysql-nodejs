import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TextInput from "./FormControl/TextInput";
import { IFormFields, formFields, Fields } from "./model/formFields";
const VepForm = () => {
  const [formValue, setFormValue] = useState({});
  const onSubmit = () => {
    console.log("");
  };

  // const renderForm = (f: IFormFields) => {
  //   switch (f.component) {
  //     case Fields.TEXT:
  //       return <TextInput key={f.id} value={} onFieldChange={} field={} />;
  //   }
  // };
  return (
    <Form>
      <Button
        className="mt-3"
        type="submit"
        variant="primary"
        onSubmit={onSubmit}
      >
        submit
      </Button>
    </Form>
  );
};

export default VepForm;
