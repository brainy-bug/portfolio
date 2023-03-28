import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClearForm = () => {
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meqwlpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        handleClearForm();
        toast.success("Form submitted successfully");
      } else throw new Error("There was an error submitting the form");

      // show success message to the user
      if (!isSubmitting) {
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error(
        "There was an error submitting the form. Please try again later."
      );
    }
  };

  return (
    <FormContext.Provider
      value={{ ...formData, handleSubmit, handleChange, isSubmitting }}
    >
      {children}
    </FormContext.Provider>
  );
};

// make sure use
export const useFormContext = () => {
  return useContext(FormContext);
};
