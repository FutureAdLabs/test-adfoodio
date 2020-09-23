import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { FieldForm } from '../../atoms/FieldForm/index'

interface Values {
  fullName: string,
  email: string,
  phone: number,
  username: string,
  password: string

}


interface Props {
  onSubmit: (values: Values) => void;
}

const Costumer: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phone: 0,
        username: '',
        password: ''
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <div>
              <Field
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Full Name"
                component={FieldForm}
              />
            </div>
            <div>
              <Field
                label="Email"
                name="email"
                type="text"
                placeholder="Email"
                component={FieldForm}
              />
            </div>
            <div>
              <Field
                label="Phone Number"
                name="phone"
                type="text"
                placeholder="Phone"
                component={FieldForm}
              />
            </div>
            <div>
              <Field
                label="Username"
                name="username"
                type="text"
                placeholder="UserName"
                component={FieldForm}
              />
            </div>
            <div>
              <Field
                label="Password"
                name="password"
                type="password"
                placeholder="password"
                component={FieldForm}
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            submit
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default Costumer;