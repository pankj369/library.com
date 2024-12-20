function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phone_pattern = /^\d{10}$/; // 10-digit phone number

  if (values.name === "") {
    errors.name = "Name should not be empty!";
  }

  if (values.contact === "") {
    errors.contact = "Contact number is mandatory";
  } else if (!phone_pattern.test(values.contact)) {
    errors.contact = "Invalid contact number format";
  }

  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password must be 8+ characters, include uppercase, number, and special character.";
  }

  return errors;
}

export default Validation;
