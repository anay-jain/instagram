const express = require("express");
const userRouter = new express.Router();
let { createUser , updateUser , deleteUser, getUser , getAllUser,
handleRequest , acceptRequest,rejectRequest} = require('./controller/userController');