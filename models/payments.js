import mongoose from "mongoose";

const PaymentsSchema = new mongoose.Schema({
   packageId: String,
   packageDate: Date,
   acceptionDate: Date,
   package: Array,
},
{
   timestamps: true, 
},
);


const PaymentsModel = new mongoose.model('Payments', PaymentsSchema)
export default PaymentsModel