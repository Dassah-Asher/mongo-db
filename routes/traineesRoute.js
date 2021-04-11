const express=require("express")
const {createTrainee, getAllTrainees, getSingleTrainee, updateTrainee, deleteTrainee}= require("../controllers/traineesController")


const router=express.Router()

router.route("/").post(createTrainee).get(getAllTrainees)
//get SingleStudent and delete single student
router.route("/:_id").get(getSingleTrainee).put(updateTrainee).delete(deleteTrainee)





module.exports=router;