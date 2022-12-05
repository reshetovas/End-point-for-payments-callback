import mongoose from "mongoose";


const CalculationsSchema = new mongoose.Schema({
   packageId: String,
   packageDate: Date,
   acceptionDate: Date,
   package: {
      type: Array,
      required: true,
   },
},
{
   timestamps: true,
},
);


const CalculationsModel = new mongoose.model('Calculations', CalculationsSchema)
export default CalculationsModel