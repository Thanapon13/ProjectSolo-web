import { useState } from "react";
import { toast } from "react-toastify";
import Input from "./input";
import validateRegister from "../validators/validate-register";
import * as authApi from "../../apis/auth-api";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: ""
};

export default function RegisterModal({ toggleModal }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);

      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
        setInput(initialInput);
        toggleModal();
        toast.success("success register. please login to continue.");
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-register">
          <div className="register-header">
            <h1>สมัคร</h1>
          </div>
          <div className="regiter-form">
            <form className="register-modal-form" onSubmit={handleSubmitForm}>
              <label htmlFor="firstName"></label>
              <Input
                placeholder="First name"
                name="firstName"
                autoComplete="off"
                value={input.firstName}
                onChange={handleChangInput}
                error={error.firstName}
              />

              <label htmlFor="lastName">
                <Input
                  placeholder="Last name"
                  name="lastName"
                  autoComplete="off"
                  value={input.lastName}
                  onChange={handleChangInput}
                  error={error.lastName}
                />
              </label>
              <label htmlFor="emailOrMobile"></label>
              <Input
                placeholder="Email address or mobile number"
                name="emailOrMobile"
                autoComplete="off"
                value={input.emailOrMobile}
                onChange={handleChangInput}
                error={error.emailOrMobile}
              />

              <label htmlFor="password"></label>
              <Input
                type="password"
                placeholder="New password"
                name="password"
                value={input.password}
                onChange={handleChangInput}
                error={error.password}
              />

              <label htmlFor="confirmpassword"></label>
              <Input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={handleChangInput}
                error={error.confirmPassword}
              />

              <button className="btn-new-password" type="submit">
                สมัคร
              </button>
              <button
                type="button"
                onClick={toggleModal}
                className="close-modal"
              >
                X
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
