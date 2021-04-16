const express=require("express")
const {createTrainee, getAllTrainees, getSingleTrainee, updateTrainee, deleteTrainee }= require("../controllers/traineesController")
const protect=require("../middlewares/authMiddleware")
const router=express.Router()

router.route("/")
.post(protect,createTrainee)
.get(protect,getAllTrainees)

//get SingleStudent and delete single student
router.route("/:_id")
.get( getSingleTrainee)
.put(protect,updateTrainee)
.delete(protect,deleteTrainee)





module.exports=router;