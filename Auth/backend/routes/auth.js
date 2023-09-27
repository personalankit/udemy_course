import express from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

import User from "../models/UserSchemas.js";

const router = express.Router();

// validation for our registration
const validate = [
  check('fullName').isLength({min: 2}).withMessage("Your full Name is required"),
  check('email').isEmail().withMessage('Please provide a valid email address'),
  check('password').isLength({min: 6}).withMessage("Password most be at lease 6 characters")
]

const generateToken = (user) => {
  return jwt.sign({_id: user._id, email: user.email, fullName: user.fullName}, 'SUPERSECRET123')
}

router.post("/register", validate ,async (req, res) => {

  // this line is our validation 
  const error = validationResult(req);

  if(!error.isEmpty()) {
    return res.status(422).json({error: error.array()});
  }

  // this line is email already exist validation
  const userExist = await User.findOne({email: req.body.email})
  if (userExist) return res.status(400).send({ success: false, message: 'Email already exist!'})

  // this le is our hashing our password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const saveUser = await user.save();
      // create and assign a token
    const token = generateToken(user)
    res.send({ 
      success: true, 
      data: { 
        id: saveUser._id, 
        fullName: saveUser.fullName, 
        email: saveUser.email 
      }, 
        token });
  } catch (err) {
    res.status(400).send({success: false, err });
  }
});


const loginValidation = [
  check('email').isEmail().withMessage('Please provide a valid email address'),
  check('password').isLength({min: 6}).withMessage("Password most be at lease 6 characters")
]


router.post("/login", loginValidation ,async  (req, res) => {

  const error = validationResult(req);

  if(!error.isEmpty()) {
    return res.status(422).json({error: error.array()});
  }

  // checking if email exist 
  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(404).send({ success: false, message: 'User is not registered.'})

  // checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword) return res.status(404).send({ success: false, message: 'Invalid Email or Password.'});

  // create and assign a token
  const token = generateToken(user)
  res.header('auth-token', token).send({ success: true, message: 'Logged in successfully', token})
});

export default router;
