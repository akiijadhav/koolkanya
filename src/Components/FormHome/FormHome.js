import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
  const onSubmit = (data) => {

    //store it in local storage
    localStorage.setItem('FullName', data.FullName);
    localStorage.setItem("Email", data.Email);
    localStorage.setItem("Mobile", data.MobileNumber);
    localStorage.setItem("Pan", data.PanNumber);

    //reset form i.e clear it
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="firstName">Your Name <span>*</span></label>
      <input
        type="text"
        placeholder="Full name"
        name="FullName"
        {...register("FullName", {
          required: "Full Name is required",
          min: 1,
          maxLength: 80,
          pattern: {
            value: /^[a-zA-z]+([\s][a-zA-Z]+)*$/i,
            message: "Please Enter Alphabets Only",
          },
        })}
      />
      <ErrorMessage errors={errors} name="FullName" />

      <label htmlFor="firstName">Your Email Address <span>*</span></label>
      <input
        type="text"
        placeholder="Email"
        name="Email"
        {...register("Email", {
          required: "Email is required",
          pattern: {
            value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Please Enter A Valid Email",
          },
        })}
      />
      <ErrorMessage errors={errors} name="Email" />

      <label htmlFor="firstName">Your Phone Number <span>*</span></label>
      <input
        type="tel"
        placeholder="Mobile number"
        name="MobileNumber"
        {...register("MobileNumber", {
          required: "Mobile No. e.g. 9xxx123456 is required",
          pattern: {
            value: /^[6-9]{1}[0-9]{9}$/,
            message: "Enter A Valid Mobile Number",
          },
        })}
      />
      <ErrorMessage errors={errors} name="MobileNumber" />

      <label htmlFor="firstName">PAN Number</label>
      <input
        type="text"
        placeholder="Pan number"
        name="PanNumber"
        {...register("PanNumber", {
          required: false,
          pattern: {
            value: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
            message: "Please Enter Valid PAN Details",
          },
        })}
      />
      <ErrorMessage errors={errors} name="PanNumber" />

      <input type="submit" />
    </form>
  );
};

export default FormHome;
