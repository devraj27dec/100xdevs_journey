const mongoose = require('mongoose')
const Account = require("../models/account.model")

exports.BalanceChecker = async(req , res) => {
    const account = await Account.findOne({
      userId: req.user.id
    })
    res.json({
      balance: account.balance
    })  
}

exports.TransferController = async (req ,res) => {
    const session = await mongoose.startSession()
  
    session.startTransaction();

    try {
        const {amount , to} = req.body;

        const account = await Account.findOne({userId : req.user.id})
      
        if(!account || account.balance < amount) {
          await session.abortTransaction()
          session.endSession()
          return res.status(400).json({
            message:"Insufficient Balance"
          })
        }
    
        const toAccount = await Account.findOne({userId: to}).session(session)


        if(!toAccount){
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({
                msg:"Invalid Account"
            })
        }
    
        
        await Account.updateOne({userId: req.user.id},{$inc : {balance: -amount}}).session(session)
        await Account.updateOne({ userId: to}, {$inc: { balance: amount } }).session(session);
    
    
        await session.commitTransaction();
        session.endSession();
    
        res.status(200).json({
            msg:"Transfer Succssfull"
        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error('Transfer Error:', error);
        res.status(500).json({
            msg: "Transfer Failed",
            error: error.message
        });
    }
}

