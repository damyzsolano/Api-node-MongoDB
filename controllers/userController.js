var userModel = require('../models/userModel').users

var userController = {}

userController.List = function(request,response){

    userModel.List(null,function(respuesta){
        response.json(respuesta)
    })
}

userController.ListId = function(request,response){

    var post = {
        id:request.body.id
    }
    
    if(post.id == undefined || post.id == null || post.id == ''){
        response,json({state:false,mensaje: 'el campo id es obligatorio'})
        return;
    }

    userModel.ListId(post,function(respuesta){
        response.json(respuesta)
    })
}

userController.Guardar = function(request,response){

    var post = {
        nombre:request.body.nombre
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    userModel.Guardar(post,function(respuesta){
        response.json(respuesta)
    })
}

userController.Update = function(request,response){
     
    var post = {
        nombre:request.body.nombre,
        id:request.body.id
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    userModel.Update(post,function(respuesta){

        if(respuesta.state == true){
            response.json({state:true,mensaje: 'Exito'})
        }
        else{
            response.json({state:false,mensaje:'fallo', info:respuesta.info})
        }
    })
}

userController.Delete = function(request,response){
 
    var post = {
        id:request.body.id
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return;
    }

    userModel.Delete(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Exito'})
        }
        else{
            response.json({state:flas,mensaje:'Exito'})
        }
    })

}

module.exports.users = userController