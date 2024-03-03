import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "src/components/form";
import { Input, Button } from "src/components/shared";
import Biker from "../assets/Pixel_Bikers.mp4";
import { FullLogo, EyeClosed, EyeOpen, BackArrow } from "src/icons";
import registerUser from "src/lib/api/registerUser";
import styles from "./styles/Forms.module.css";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupUser = async (e) => {
    e.preventDefault();

    const { username, password, confirmPassword, role } = formData;
    console.log("Form Data:", formData);
    try {
      const data = await registerUser({
        username,
        password,
        confirmPassword,
        role: role,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setFormData({});
        toast.success("Sign up successful");
        navigate(role === "Admin" ? "/admindashboard" : "/dashboard");
      }
    } catch (error) {
      console.log(error);
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
        <Form action="/v1/users/signup" method="post" onSubmit={signupUser}>
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
              onClickHandler={togglePasswordVisibility}
              className={styles.passBtn}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </Button>
          </div>

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
              onClickHandler={togglePasswordVisibility}
              className={styles.passBtn}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </Button>
          </div>

          <Button type="submit">Sign Up</Button>
        </Form>

        <p className={styles.switchForm}>
          Already have an account?{" "}
          <Link className={styles.link} to="/Login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
