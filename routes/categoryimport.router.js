const express=require('express')


const Category=require("../model/category.model")
const categories=require("../data/category")

const router = express.Router();
router.route("/")
    .post(async (req,res)=>{
        try{
        
        const categoryInDB=await Category.insertMany(categories.data)
        res.json(categoryInDB)
        }
        catch(err){
            console.log(err);
            res.json({message:"could not add categories to db"})
        }
    })
module.exports=router;