var express = require('express');
const router = express.Router();

const users = [
  {
    username: "Taddy",
    password: "Xaviera",
    role: "Admin",
  },
  {
    username: "Zero6",
    password: "Weaver",
    role: "Regular",
  },
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users})
});

// POST route to create a new user
router.post('/', function(req, res, next) {
  const { username, password, role } = req.body;
  const newUser = { username, password, role };
  users.push(newUser); 

  res.status(201).json({ message: 'User created successfully', user: newUser });
});


module.exports = router;
