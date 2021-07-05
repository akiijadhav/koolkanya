import React from "react";
//import useForm so we can use it
import { useForm } from "react-hook-form";
//using error msg component for styling over custom p tags for error msg
import { ErrorMessage } from "@hookform/error-message";
//styles
import "./FormHomes.scss";

const FormHome = () => {
  //destructure and use Form from react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  //handler for onSubmit of form --> what to do next? --> set localStorage with form data
  const onSubmit = (data,  useHistory ) => {
    //store it in local storage
    localStorage.setItem("FullName", data.FullName);
    localStorage.setItem("Email", data.Email);
    localStorage.setItem("Mobile", data.MobileNumber);
    localStorage.setItem("Pan", data.PanNumber);
    //reset form i.e clear it
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formHome">
      <div className="inputGroup">
        <label htmlFor="firstName" className="labelText">
          Your Name <span className="labelColor">*</span>
        </label>
        <input
          type="text"
          placeholder="Khushboo Bhandari"
          name="FullName"
          {...register("FullName", {
            required: (<span className="errorsMsg">Full Name is required</span>),
            min: 1,
            maxLength: 80,
            pattern: {
              value: /^[a-zA-z]+([\s][a-zA-Z]+)*$/i,
              message: (<span className="errorsMsg">Please Enter Alphabets Only</span>),
            },
          })}
        />
        <ErrorMessage errors={errors} name="FullName" />
      </div>

      <div className="inputGroup">
        <label htmlFor="Email" className="labelText">
          Your Email Address <span className="labelColor">*</span>
        </label>
        <input
          type="email"
          placeholder="khushboo@koolkanya.com"
          name="Email"
          {...register("Email", {
            required: (<span className="errorsMsg">Email is required</span>),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: (<span className="errorsMsg">Please Enter A Valid Email</span>),
            },
          })}
        />
        <ErrorMessage errors={errors} name="Email" className="errorsMsg"/>
      </div>

      <div className="inputGroup">
        <label htmlFor="MobileNumber" className="labelText">
          Your Phone Number <span className="labelColor">*</span>
        </label>
        <input
          type="tel"
          placeholder="Mobile number"
          name="MobileNumber"
          {...register("MobileNumber", {
            required: (<span className="errorsMsg">Mobile No. e.g. 9xxx123456 is required</span>),
            pattern: {
              value: /^[6-9]{1}[0-9]{9}$/,
              message: (<span className="errorsMsg">Enter A Valid Mobile Number</span>),
            },
          })}
        />
        <ErrorMessage errors={errors} name="MobileNumber" className="errorsMsg" />
      </div>

      <div className="inputGroup">
        <label htmlFor="panNumber" className="labelText">PAN Number</label>
        <input
          type="text"
          placeholder="Pan number"
          name="PanNumber"
          {...register("PanNumber", {
            required: false,
            pattern: {
              value: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
              message: (<span className="errorsMsg">Please Enter Valid PAN Details</span>),
            },
          })}
        />
        <ErrorMessage errors={errors} name="PanNumber" className="errorsMsg" />
      </div>

      <div className="inputGroup">
        <input type="submit" className="submitFormBtn" />
      </div>
    </form>
  );
};

export default FormHome;
