import express from "express";
import { createRoom,updateRoom,getRoom,getRooms,deleteRoom,updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


//CREATE
router.post("/:hotelid",verifyAdmin, createRoom)
//UPDATE
router.put("/:id",verifyAdmin, updateRoom)
//DELETE
router.delete("/:id",verifyAdmin, deleteRoom)
//GET
router.get("/:id", getRoom)
//GET ALL
router.get("/", getRooms)

router.put("/available/:id", updateRoomAvailability)


export default router

