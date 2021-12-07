const express = require("express");
const {signup, signin, signout} = require("../controllers/user");
const router = express.Router();
const {check} = require("express-validator");
router.post("/signup", [
  check("name", "Name at least should be 3 characters").isLength({min: 3}),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 caracters").isLength({min: 6})
], signup);

router.post("/signin", [
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 caracters").isLength({min: 6})
], signin);
router.get("/signout", signout);
module.exports = router;
