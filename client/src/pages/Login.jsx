import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "src/components/form";
import { Input, Button } from "src/components/shared";
import Biker from "../assets/Pixel_Bikers.mp4";
import { FullLogo, EyeClosed, EyeOpen, BackArrow } from "src/icons";
import FetchUsers from "src/lib/api/users";
import styles from "./styles/Forms.module.css";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await FetchUsers();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUsers();
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === formData.username
      // user.password === formData.password
    );

    if (user) {
      if (user?.password.trim() === formData.password.trim()) {
        setIsSubmitted(true);
        setError("");
        {
          user.role === "Admin"
            ? navigate("/admindashboard")
            : navigate("/dashboard");
        }
      } else {
        setError("Invalid Password");
      }
    } else {
      setError("User not found");
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
        <Form action="" method="get" onSubmit={handleSubmit}>
          <Link to="/">
            <div className={styles.backBtn}>
              <BackArrow alt="Back arrow" />
              <p>Back</p>
            </div>
          </Link>
          <FullLogo alt="logo" />

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

          <Button
            type="submit"
            onClickHandler={onsubmit}
            disabled={isSubmitted}
          >
            Login
          </Button>

          {error && <div className={styles.error}>{error}</div>}
        </Form>

        <p>
          {`Don't have an account?`}{" "}
          <Link className={styles.link} to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
