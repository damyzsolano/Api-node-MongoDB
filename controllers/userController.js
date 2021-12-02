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
        response.json({state:false,mensaje: 'el campo id es obligatorio'})
        return;
    }

    userModel.ListId(post,function(respuesta){
        response.json(respuesta)
    })
}

userController.Save = function(request,response){

    var post = {
        nombre:request.body.nombre,
        email:request.body.email,
        password:sha256(request.body.password + config.secretPassword)
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    if(post.email == undefined || post.email == null || post.email == ''){
        response.json({state:false,mensaje:'el campo email es obligatorio'})
        return;
    }
    if(request.body.password == undefined || request.body.password == null || request.body.password == ''){
        response.json({state:false,mensaje:'el campo password es obligatorio'})
        return;
    }


    console.log(post)

    userModel.Save(post,function(respuesta){
       
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Usuario Creado Correctamente'})
        }
        else{
            response.json({state:false,mensaje:'Error al Crear Usuario'})
        }
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
        response.json({state:false,mensaje:'el campo Id es obligatorio'})
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
            response.json({state:true,mensaje:'Usuario Se Elimino correctamente'})
        }
        else{
            response.json({state:false,mensaje:'Se presento un Error al Eliminar ',info:respuesta.info})
        }

    })

}

/*userController.Forgot = function(request,response){
    var post = {
        email:request.body.email
    }

    if(request.body.email == undefined || request.body.email == null || request.body.email == ''){
        response.json({state:false,mensaje:'el campo email es obligatorio'})
        return;
    }
    console.log(post)
    userModel.Forgot(post,function(respuesta){

        if(respuesta[0].email == post.email){
            response.json({state:true,mensaje:'Vamos a enviar un correo'})
        }
        else{
         response.json({state:false,mensaje:'Correo electronico no valido'})
        }
        console.log(respuesta)
       
     })
}*/


userController.Login = function(request,response){
    var post = {
       email:request.body.email,
       password:sha256(request.body.password + config.secretPassword)
    }

    if(post.email == undefined || post.email == null || post.email == ''){
        response.json({state:false,mensaje:'el campo email es obligatorio'})
        return;
    }

    if(request.body.password == undefined || request.body.password == null || request.body.password == ''){
        response.json({state:false,mensaje:'el campo password es obligatorio'})
        return;
    }
    console.log(post)
    userModel.Login(post,function(respuesta){

       if(respuesta[0].password == post.password){
           response.json({state:true,mensaje:'Welcome',id:respuesta[0]._id})
       }
       else{
        response.json({state:false,mensaje:'fail',id:respuesta._id})
       }

    })
}

module.exports.users = userController