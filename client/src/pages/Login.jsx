import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "src/components/form";
import { Input, Button } from "src/components/shared";
import Biker from "../assets/Pixel_Bikers.mp4";
import { FullLogo, EyeClosed, EyeOpen } from "src/icons";
import styles from "./styles/Forms.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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

  return (
    <div className={styles.login}>
      <div className={styles.videoBox}>
        <video className={styles.bike} autoPlay loop>
          <source src={Biker} type="video/mp4" />
        </video>
      </div>

      <div className={styles.formWrapper}>
        <Form action="get">
          <FullLogo />
          <div>
            <h2> Login with your username</h2>
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
              onClickHandler={togglePasswordVisbility}
              className={styles.passBtn}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </Button>
          </div>

          <p>
            Forgot password? <Link className="link">Reset</Link>
          </p>

          <Link to="/">
            <Button type="submit">Login</Button>
          </Link>
        </Form>

        <p>
          {`Don't have an account?`}{" "}
          <Link className="link" to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
