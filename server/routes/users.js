var express = require("express");
const router = express.Router();
const UserModel = require("../models/user");

const test = (req, res) => {
  res.json("Test working");
};

const signupUser = async (req, res) => {
  try {
    const { username, password, confirmPassword, role } = req.body;

    // validate username
    if (!username) {
      return res.json({
        error: "Username should not be empty",
      });
    }
    if (!/^.{3,}$/.test(username)) {
      return res.json({ error: "Username should be at least 3 characters" });
    }

    // Check if username exists
    const exist = await users.findOne({ username });
    if (exist) {
      return res.json({
        error: "Username is taken",
      });
    }
    // validate password
    if (!password) {
      return res.json({
        error: "Password should not be empty",
      });
    }

    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return res.json({
        error:
          "Password should contain at least 6 characters, including uppercase and lowercase",
      });
    }

    if (password !== confirmPassword) {
      return res.json({ error: "Passwords do not match" });
    }

    role = "Regular";

    const user = await users.create({
      username,
      password,
      role,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });

    if (user) {
      const pass = req.body.password === user.password;

      if (pass) {
        // Determine the redirect URL based on user role
        const redirectUrl =
          user.role === "Admin" ? "/admindashboard" : "/dashboard";

        // Send a response back to the client with the redirect URL
        res.status(200).json({ redirectUrl });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", test);
router.post("/signup", signupUser);

module.exports = router;

// const users = [
//   {
//     username: "Taddy",
//     password: "Xaviera",
//     role: "Admin",
//   },
//   {
//     username: "Zero6",
//     password: "Weaver",
//     role: "Regular",
//   },
// ];

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json({users})
// });

// // POST route to create a new user
// router.post('/', function(req, res, next) {
//   const { username, password, role } = req.body;
//   const newUser = { username, password, role };
//   users.push(newUser);

//   res.status(201).json({ message: 'User created successfully', user: newUser });
// });
