import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { FieldForm } from '../../atoms/FieldForm/index'

interface Values {
  name: string,
  description: string,

}


interface Props {
  onSubmit: (values: Values) => void;
}

const Category: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
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
                label="Category"
                name="name"
                type="text"
                placeholder="Category name"
                component={FieldForm}
              />
            </div>
            <div>
              <Field
                label="Description"
                name="description"
                type="text"
                placeholder="Category description"
                component={FieldForm}
              />
            </div>
          </div>
          <Button variant="contained" color="primary" type="submit">submit </Button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default Category;