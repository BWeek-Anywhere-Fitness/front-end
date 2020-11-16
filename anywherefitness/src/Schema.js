import * as yup from 'yup';

export default yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 2 characters long"),
    
    email: yup
      .string()
      .email('Must be valid email address')
      .required('Must include email address'),
      
    password: yup
      .string()
      .min(8, 'Must must be at least 8 characters long')
      .required('Must be valid password'),
   
    terms: yup.boolean(),
    check: yup.boolean(),
  });