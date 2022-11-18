const axios = require("axios")
const planeManagementModel = require("../models/planeManagementModel")


const planManagement = async function(req,res){
let file = req.file
if(file.length == 0){
return res.status(400).send({status:false,message:"video incompleted"})
}
}