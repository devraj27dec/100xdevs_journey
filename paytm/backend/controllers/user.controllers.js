const User = require("../models/user.models");
const Account = require('../models/account.model')
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

exports.SignUpController = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(402).json({ msg: "User Already Exists" });
  }
  const user = await User.create({
    username,
    email,
    password,
  });

  const userId = user._id

  console.log("userId" , userId)
  const account = await Account.create({
    userId,
    balance: Math.floor(1 + Math.random() * 1000)
  })

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    userId
  );

  return res.status(201).json({
    msg: "User Created Succssfully",
    accessToken,
    refreshToken,
    account
  });
};

exports.SignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(402).json({ msg: "email or password is required" });
    }

    const user = await User.findOne({
      $or: [{ email }, { username: email }],
    }).select("+password");

    console.log(user);

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return res.status(201).json({
      msg: "User LoggedIn Successfully",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error)
    return res.status(404).json({ msg: "User not found" });
  }

};

exports.profileController = async(req, res) => {
  const user = req.user;


  const account = await Account.findOne({ userId: user._id });

  if (!account) {
    return res.status(404).json({ msg: "Account not found for this user" });
  }

  res.status(200).json({
    msg: "User Profile",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      account: {
        id: account._id,
        balance: account.balance,
      }
    },
  });
};

exports.LogoutController = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    msg: `logged out successfully`,
  });
};



