function Validation (values){

  let errors ={}
  const email_pattern = /^[^\s@]+@[^@]+\.[^@]+$/;
  const phone_pattern = /^[0-9]{10}$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  }else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Wrong password.";
  } else {
    errors.password = "";
  }
  return errors;

}
export default Validation;