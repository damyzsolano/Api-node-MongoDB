const planModel = {}

const mongoose = require('mongoose')

const Schema = mongoose.Schema;
var UserSchema = new Schema({
    nombre:String,
    descripcion:String,
    precio:Number
})

const Mymodel = mongoose.model('plan', UserSchema)

planModel.List = function(post,callback){

    Mymodel.find({},{nombre:1,_id:1,descripcion:1,precio:1},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            return callback(documentos)
        }
    })
}

planModel.ListId = function(post,callback){

    Mymodel.find({_id:post.id},{nombre:1,_id:1,descripcion:1,precio:1},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            return callback(documentos)
        }
    })
}

planModel.Guardar = function(post,callback){

    const plan = new Mymodel
    plan.nombre = post.nombre
    plan.descripcion = post.descripcion
    plan.precio = post.precio
    plan.save((error,planCreate) => {
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(planCreate)
            return callback({state:true,info:planCreate})
        }
    })
}

planModel.Update = function(post,callback){
    Mymodel.findByIdAndUpdate(
        post.id,
        {nombre:post.nombre},
        (error,usuariomodificado) => {
            if(error){
                console.log(error)
                return callback({state:false,info:error})
            }
            else{
                return callback({state:true,info:usuariomodificado})
            }
        }
    )
}

planModel.Delete = function(post,callback){
    Mymodel.findByIdAndDelete(post.id,(error,eliminado) =>{
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:eliminado})
        }
    })
}

module.exports.plan = planModel
