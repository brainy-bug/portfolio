import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { testimonials_url as url } from "../utils/constants";

const TestimonialsContext = React.createContext();

export const TestimonialsProvider = ({ children }) => {
  const [data, setData] = useState({
    testimonialsLoading: false,
    testimonialsError: false,
    testimonials: [],
  });

  const fetchTestimonials = async (url) => {
    try {
      setData((prev) => {
        return { ...prev, testimonialsLoading: true };
      });
      const response = await axios.get(url);
      console.log(response);
      const testimonials = response.data;
      setData((prev) => {
        return { ...prev, testimonials, testimonialsLoading: false };
      });
    } catch (error) {
      console.log(error);

      setData((prev) => {
        return { ...prev, testimonialsError: true, testimonialsLoading: false };
      });
    }
  };

  useEffect(() => {
    fetchTestimonials(url);
  }, []);

  return (
    <TestimonialsContext.Provider value={{ ...data }}>
      {children}
    </TestimonialsContext.Provider>
  );
};
// make sure use
export const useTestimonialsContext = () => {
  return useContext(TestimonialsContext);
};
