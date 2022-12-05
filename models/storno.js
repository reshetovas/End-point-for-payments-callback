import mongoose from "mongoose";

const CancelSchema = new mongoose.Schema({
   reason: Number,
   details: String
},
{
   timestamps: true, 
},
);


const CancelModel = new mongoose.model('Cancel', CancelSchema)
export default CancelModel