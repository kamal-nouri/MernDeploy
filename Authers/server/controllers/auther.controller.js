const { request, response } = require("express")
const {Auther} =require("../models/auther.model")


module.exports.findAll=(request,response)=> {
    Auther.find({}).sort({"name":1})
        .then(AllPeople =>response.json(AllPeople))
        .catch(err =>response.json({message:"can't find anyone ",error:err}))
    
}

module.exports.createAuther=(request,response)=>{
    Auther.create(request.body)
    .then(auther => response.json(auther))
    .catch(err => response.status(400).json(err))
}

module.exports.getOneAuther=(request,response) =>{
    Auther.findOne({_id:request.params.id})
    .then(auther=>response.json(auther))
    .catch(err=>response.json(err))
}

module.exports.updateAuther =(request,response) =>{
    Auther.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(updated=>response.json(updated))
    .catch(err =>response.status(400).json(err))
}

module.exports.deleteAuther=(request,response) =>{
    Auther.deleteOne({_id:request.params.id})
    .then(deleted=>response.json(deleted))
    .catch(err =>response.json(err))
}