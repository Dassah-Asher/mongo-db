const express=require("express")
const {addUser,userLogin}=require("../controllers/usersController")

const router=express.Router()

router.route("/register").post(addUser);
router.route("/login").post(userLogin)

//get all users
//router.route("/").get(


module.exports=router;