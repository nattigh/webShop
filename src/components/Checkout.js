import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useFetch from "../useFetch";
import "../css/checkout.css";

function Checkout({ bag }) {
  const [countriesCities, setCountriesCities] = useState([]);
  const ADDRESS = new RegExp(/^[a-zA-Z0-9\s,'-]*$/g);
  const COUNTRY_CITY = new RegExp(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);

  //european countries:
  const { data: country, error, loading } = useFetch(
    "https://restcountries.eu/rest/v2/region/europe?fields=name;"
  );

  //all countries+cities:
  const { data: cities, err, lo } = useFetch(
    "https://countriesnow.space/api/v0.1/countries"
  );

  //COUNTRY:
  //Array(53) [ 0: Object { name: "Åland Islands" }, 1: Object { name: "Albania" }, … ]

  //CITIES.DATA:
  /*Array(196) [
    0: Object { country: "Afghanistan", cities: Array(8) [ "Herat", "Kabul", "Kandahar", … ] },
    1: Object { country: "Albania", cities: Array(6) [ "Elbasan", "Petran", "Pogradec", … ] },
    2: Object { country: "Algeria", cities: Array(32) [ "Algiers", "Annaba", "Azazga", … ] }, 
  … ]*/

  //merge EU countries with corresponding cities:
  useEffect(() => {
    if (cities && country) {
      const merged = [];
      country.forEach((element) => {
        let value = cities.data.find((ci) => ci.country === element.name);
        if (value) merged.push(value);
      });
      setCountriesCities(merged);
      //console.log(merged);//0: Object { country: "Albania", cities: (6) […],..}
    }
  }, [cities, country]);

  if (loading || lo) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (err) return <h1>{error}</h1>;

  return (
    //Formik & Yup library
    //Formik - form
    //Yup - validation
    <div>
      <h1> CHECKOUT </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          city: "",
          address: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 25 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 25 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          /*--COUNTRY_CITY VALIDATION--*/
          // country: Yup.object().required("Please select a country"),
          country: Yup.string().required("Required"),

          // city: Yup.string()
          //   .matches(COUNTRY_CITY, "Invalid city")
          //   .required("Required"),
          /*----*/
          address: Yup.string()
            .matches(ADDRESS, "Invalid address")
            .required("Required"),
        })}
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
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            {/*COUNTRY: */}
            <label htmlFor="country">Country</label>
            <Field
              component="select"
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="" selected disabled>
                Select country
              </option>
              {countriesCities.map((loc, index) => (
                <option value={loc.country} key={index}>
                  {loc.country}
                </option>
              ))}
              <ErrorMessage name="country" component="div" />
            </Field>

            {/*CITY: */}
            <label htmlFor="city">City</label>
            <Field
              component="select"
              name="city"
              value={values.city}
              onChange={handleChange}
            >
              <option selected disabled={values.city}>
                Select country first
              </option>
              {values.country
                ? countriesCities
                    .find(
                      (countryList) => countryList.country === values.country
                    )
                    .cities.map((ci, index) => (
                      <option value={ci} key={index}>
                        {ci}
                      </option>
                    ))
                : null}
              <ErrorMessage name="city" component="div" />
            </Field>

            <label htmlFor="address">Address</label>
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />

            <button
              className="detailButton"
              style={{ width: "35%" }}
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
