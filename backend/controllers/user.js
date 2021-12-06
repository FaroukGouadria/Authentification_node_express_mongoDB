const User = require("../models/user");
const {validationResult}=require('express-validator')
exports.signup = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error:errors.array()[0].msg
        })
    }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({error: "Unable to add user"});
    }

    return res.json({message: "Success", user});
  });
};
