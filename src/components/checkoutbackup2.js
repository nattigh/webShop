import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useFetch from "../useFetch";
import "../css/checkout.css";

function Checkout({ bag }) {
  const [tester, setTester] = useState("aas");

  return (
    //Formik & Yup library
    //Formik - form
    //Yup - validation
    <div>
      <h1> CHECKOUT </h1>
      <Formik
        initialValues={{
          test: "",
          firstName: "",
        }}
        validationSchema={Yup.object({})}
        onSubmit={(values, { setSubmitting }) => {
          console.log("subbmitel");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form className="checkoutForm">
            <label htmlFor="test">test</label>
            <Field
              component="select"
              name="test"
              value={values.test}
              onChange={handleChange}
            >
              <option value="1">elso</option>
              <option value="2">masodik</option>
              <option value="3">harmadik</option>
              <option value="4">istenfasza</option>
              <ErrorMessage name="test" component="div" />
            </Field>
            <br />
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <br />

            <button
              className="detailButton"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Checkout;
