var express = require("express");
const router = express.Router();
const UserModel = require("../models/user");

router.post("/signup", async (req, res) => {
  const user = await UserModel.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  });
  return res.status(200).json(user);
});

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
