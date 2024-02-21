var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users})
});

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

module.exports = router;
