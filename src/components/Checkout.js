import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/checkout.css";

function Checkout({ checkoutDetails, addShippingDetails }) {
  const [countriesCities, setCountriesCities] = useState([]);
  const ADDRESS = new RegExp(/^[a-zA-Z0-9\s,'-]*$/g);
  const COUNTRY_CITY = new RegExp(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);

  const navigate = useNavigate();

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

  console.log("countriesCities erteke: ", countriesCities);
  console.log("checkoutDetails erteke: ", checkoutDetails);

  return (
    //Formik & Yup library
    //Formik - form
    //Yup - validation
    <div>
      <h1> CHECKOUT </h1>
      <Formik
        initialValues={{
          firstName: checkoutDetails.firstName,
          lastName: checkoutDetails.lastName,
          email: checkoutDetails.email,
          // country: checkoutDetails,
          // city:
          //   countriesCities.find(
          //     (c) => c.country === checkoutDetails.country
          //   ) || "",
          country: "",
          city: "",
          address: checkoutDetails.address,
        }}
        validationSchema={Yup.object({
          // firstName: Yup.string()
          //   .max(15, "Must be 15 characters or less")
          //   .required("Required"),
          // lastName: Yup.string()
          //   .max(20, "Must be 20 characters or less")
          //   .required("Required"),
          // email: Yup.string()
          //   .email("Invalid email address")
          //   .required("Required"),
          // address: Yup.string()
          //   .min(10, "Must be at least 10 characters")
          //   .matches(ADDRESS, "Invalid address")
          //   .required("Required"),
          // country: Yup.string()
          //   .matches(COUNTRY_CITY, "Invalid country")
          //   .required("Select country"),
          // city: Yup.string()
          //   .matches(COUNTRY_CITY, "Invalid city")
          //   .required("Select city"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values: ", values);
          addShippingDetails(values);
          setSubmitting(false);
          navigate("/payment");
        }}
        //enableReinitialize
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
              // value={checkoutDetails.country}
              onChange={handleChange}
            >
              <option
                selected
                value={checkoutDetails.country || ""}
                label={checkoutDetails.country || "Select country first"}
              />
              {countriesCities.map((loc, index) => (
                <option value={loc.country} key={index}>
                  {loc.country}
                </option>
              ))}
            </Field>
            <ErrorMessage name="country" component="div" />

            {/*CITY: */}
            <label htmlFor="city">City</label>
            <Field
              component="select"
              name="city"
              //value={checkoutDetails.city}
              onChange={handleChange}
            >
              <option
                selected
                value={checkoutDetails.city || ""}
                // disabled={values.city}
                label={checkoutDetails.city || "Select country first"}
              />
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
            </Field>
            <ErrorMessage name="city" component="div" />

            <label htmlFor="address">Address</label>
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />

            <button
              className="detailButton"
              style={{ width: "max-content", margin: "10px 0" }}
              type="submit"
              disabled={isSubmitting}
            >
              Select payment option
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Checkout;
