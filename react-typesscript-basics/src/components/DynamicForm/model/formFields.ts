export enum Fields {
  TEXT = "text",
  TEXTAREA = "textarea",
  RADIO = "radio",
  OPTIONS = "options",
}

export interface IFormFields {
  component: string;
  label?: string;
  type?: string;
  id: string;
  fields?: {
    label: string;
    id: string;
    value?: string;
  }[];
}
export const formFields: IFormFields[] = [
  {
    component: "text",
    label: "First name",
    type: "text",
    id: "firstName",
  },
  {
    component: "text",
    label: "surname",
    type: "text",
    id: "SurName",
  },
  {
    component: "text",
    label: "Email",
    type: "email",
    id: "email",
  },
  {
    component: "checkbox",
    label: "Check me out",
    type: "checkbox",
    id: "checkmeout",
  },
  {
    component: "textarea",
    label: "Address",
    type: "textarea",
    id: "address",
  },
  {
    component: "radio",
    label: "Gender",
    id: "gender",
    fields: [
      {
        label: "Male",
        id: "male",
        value: "male",
      },
      {
        label: "Female",
        id: "female",
        value: "female",
      },
    ],
  },
  {
    component: "options",
    label: "Option",
    id: "option",
    fields: [
      { label: "One", id: "one", value: "1" },
      { label: "Two", id: "two", value: "2" },
      { label: "Three", id: "three", value: "3" },
    ],
  },
];
