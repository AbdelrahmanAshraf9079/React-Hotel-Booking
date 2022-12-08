import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// router.put("/checkauthentication", verifyToken,(req,res,next) => {
//     res.send("hello, user you are logged in!");
// })

// router.put("/checkuser/:id", verifyUser,(req,res,next) => {
//     res.send("hello, you are logged in and can delete your account");
// })

// router.put("/checkadmin/:id", verifyAdmin,(req,res,next) => {
//     res.send("hello, admin you are logged in and can delete all accounts");
// })


//UPDATE
router.put("/:id",verifyUser, updateUser)
//DELETE
router.delete("/:id",verifyUser,  deleteUser)
//GET
router.get("/:id",verifyUser,  getUser)
//GET ALL
router.get("/",verifyAdmin,  getUsers)



export default router 

