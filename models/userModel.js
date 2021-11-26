var userModel = {}

const mongoose = require('mongoose')

const Schema = mongoose.Schema;
var UserSchema = new Schema({
    nombre:String
})

const Mymodel = mongoose.model('usuarios', UserSchema)

userModel.List = function(post,callback){

    Mymodel.find({},{nombre:1,_id:1},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            return callback(documentos)
        }
    })
}

userModel.ListId = function(post,callback){

    Mymodel.find({_id:post.id},{nombre:1,_id:1},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            return callback(documentos)
        }
    })
}

userModel.Guardar = function(post,callback){

    const user = new Mymodel
    user.nombre = post.nombre
    user.save((error,userCreate) => {
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(userCreate)
            return callback({state:true,info:userCreate})
        }
    })
}

userModel.Update = function(post,callback){
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

userModel.Delete = function(post,callback){
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

module.exports.users = userModel