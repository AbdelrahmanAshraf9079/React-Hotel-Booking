import Room from "../models/Room.js" ;
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";


// Create a new Room and add it to the hotel
export const createRoom = async (req,res,next) =>{

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        console.log(savedRoom);
        
        await Hotel.findByIdAndUpdate(hotelId, { 
            $push: { rooms: savedRoom._id } 
        })
        res.status(200).json(savedRoom) ;
    }catch (err) {
        next(err);
    }
}

//UPDATE Room
export const updateRoom = async (req, res, next) => {
    const newRoom = new Room(req.body)

    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}

//DELETE Room
export const deleteRoom = async (req, res, next) => {
    const newRoom = new Room(req.body)

    try {
        await Room.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Room has been deleted.")
    } catch (err) {
        next(err)
    }
}

//GET Room
export const getRoom = async (req, res, next) => {
    try {
        const Room = await Room.findById(
            req.params.id
        )
        res.status(200).json(Room)
    } catch (err) {
        next(err)
    }
}


//GET ALL Room
export const getRooms = async (req, res, next) => {
    try {
        const Rooms = await Room.find()
        res.status(200).json(Rooms)
    } catch (err) {
        next(err)
    }
}