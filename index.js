import express from 'express';
import mongoose from 'mongoose';
import PaymentsModel from './models/payments.js'

mongoose.connect('mongodb://artem:1qaz%40WSX@ac-zczj5ee-shard-00-00.9aornvn.mongodb.net:27017,ac-zczj5ee-shard-00-01.9aornvn.mongodb.net:27017,ac-zczj5ee-shard-00-02.9aornvn.mongodb.net:27017/mkk?ssl=true&replicaSet=atlas-mwi9y0-shard-0&authSource=admin&retryWrites=true&w=majority')
   .then(() => console.log('DB ok'))
   .catch((err) => console.log('DB error', err))

const app = express();
app.use(express.json());


app.post('/payments', async (req,res) => {
   try {
      //Создаем объект в БД Mongo
   const doc = new PaymentsModel({
      packageId: req.body.packageId,
      packageDate: req.body.packageDate,
      acceptionDate: req.body.acceptionDate,
      package: req.body.package,
   });
   const payments = await doc.save(); 

   res.json({
      success: true,
      doc, //объект 
   });
      } catch (err) {
         console.log(err);
         res.status(500).json({
            messgae: "Не удалось"
         })
      }
});

app.post('/cancel', async (req,res) => {
   try {
      //Создаем объект в БД Mongo
   const doc = new PaymentsModel({
      packageId: req.body.packageId,
      packageDate: req.body.packageDate,
      acceptionDate: req.body.acceptionDate,
      package: req.body.package,
   });
   const payments = await doc.save(); 

   res.json({
      success: true,
      doc, //объект 
   });
      } catch (err) {
         console.log(err);
         res.status(500).json({
            messgae: "Не удалось"
         })
      }
})

app.post('/test', (req,res) => {
   // var fullName = req.body.map(p => p.fullName);
   // console.log(fullName);
   let fullName = []
   fullName = req.body;
   console.log(fullName);

   res.json({
      success: true,
      fullName,
   })
})

app.listen(4444, (err) => {
   if (err) {
      return console.log(err);
   }
   console.log('Server OK');
});
