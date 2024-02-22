import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "src/components/form";
import { Input, Button } from "src/components/shared";
import Biker from "../assets/Pixel_Bikers.mp4";
import { FullLogo, EyeClosed, EyeOpen, BackArrow } from "src/icons";
import FetchUsers from "src/lib/api/users";
import styles from "./styles/Forms.module.css";

const SignUp = () => {
  //   const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(() => {
  //   const updateUsers = async () => {
  //     try {
  //       const data = await FetchUsers();
  //       setUsers(data.users);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };

  //   updateUsers();
  // }, []);

  const navigate = useNavigate();

  const togglePasswordVisbility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInput = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;
    const inputError = {};

    if (!username) inputError.username = "Username should not be empty";
    if (!/^.{3,}$/.test(username)) {
      inputError.username = "Username should be at least 3 characters";
    }
    if (!password) inputError.password = "Password should not be empty";
    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      inputError.password =
        "Password should contain at least 6 characters, including uppercase and lowercase";
    }
    if (password !== confirmPassword) {
      inputError.confirmPassword = "Passwords do not match";
    }

    setFormError(inputError);

    if (Object.keys(inputError).length === 0) {
      try {
        const newUser = { username, password, role: "Regular" };
         const response = await FetchUsers("POST", newUser);
        setIsSubmitted(true);
        navigate("/dashboard");
        console.log("New user response:", response);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.videoBox}>
        <video className={styles.bike} autoPlay loop>
          <source src={Biker} type="video/mp4" />
        </video>
      </div>

      <div className={styles.formWrapper}>
        <Form action="" method="post" onSubmit={validateInput}>
          <Link to="/">
            <div className={styles.backBtn}>
              <BackArrow alt="Back arrow" />
              <p>Back</p>
            </div>
          </Link>
          <FullLogo alt="logo" />

          <div>
            <h3> Sign up with your username</h3>
          </div>

          <Input
            label="Username"
            type="text"
            name="username"
            variant="unique"
            autoComplete="on"
            value={formData.username}
            onChangeHandler={handleInputChange}
          />

          {formError.username && (
            <div className={styles.error}>{formError.username}</div>
          )}

          <div className={styles.passwordBox}>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              variant="unique"
              autoComplete="off"
              value={formData.password}
              onChangeHandler={handleInputChange}
            />

            <Button
              type="button"
              onClickHandler={togglePasswordVisbility}
              className={styles.passBtn}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </Button>
          </div>

          {formError.password && (
            <div className={styles.error}>{formError.password}</div>
          )}

          <div className={styles.passwordBox}>
            <Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              label="Confirm Password"
              variant="unique"
              autoComplete="off"
              value={formData.confirmPassword}
              onChangeHandler={handleInputChange}
            />

            <Button
              type="button"
              onClickHandler={togglePasswordVisbility}
              className={styles.passBtn}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </Button>
          </div>

          {formError.confirmPassword && (
            <div className={styles.error}>{formError.confirmPassword}</div>
          )}

          <Button
            type="submit"
            onClickHandler={validateInput}
            disabled={isSubmitted}
          >
            Sign Up
          </Button>
        </Form>

        <p className={styles.switchForm}>
          Already have an account? {""}
          <Link className="link" to="/Login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
