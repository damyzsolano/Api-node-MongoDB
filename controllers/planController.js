const planModel = require('../models/planModel').plan

const planController = {}

planController.List = function(request,response){

    planModel.List(null,function(respuesta){
        response.json(respuesta)
    })
}

planController.ListId = function(request,response){

    var post = {
        id:request.body.id
    }
    
    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje: 'el campo id es obligatorio'})
        return;
    }

    planModel.ListId(post,function(respuesta){
        response.json(respuesta)
    })
}

planController.Guardar = function(request,response){

    var post = {
        nombre:request.body.nombre,
        descripcion:request.body.descripcion,
        precio:request.body.precio
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }
    if(post.descripcion == undefined || post.descripcion == null || post.descripcion == ''){
        response.json({state:false,mensaje:'el campo descripcion es obligatorio'})
        return;
    }
    if(post.precio == undefined || post.precio == null || post.precio == ''){
        response.json({state:false,mensaje:'el campo precio es obligatorio'})
        return;
    }

    planModel.Guardar(post,function(respuesta){
        response.json(respuesta)
    })
}

planController.Update = function(request,response){
     
    var post = {
        nombre:request.body.nombre,
        descripcion:request.body.descripcion,
        precio:request.body.precio,
        id:request.body.id
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return;
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    if(post.descripcion == undefined || post.descripcion == null || post.descripcion == ''){
        response.json({state:false,mensaje:'el campo descripcion es obligatorio'})
        return;
    }

    if(post.precio == undefined || post.precio == null || post.precio == ''){
        response.json({state:false,mensaje:'el campo precio es obligatorio'})
        return;
    }


    planModel.Update(post,function(respuesta){

        if(respuesta.state == true){
            response.json({state:true,mensaje: 'Plan actualizado correctamente'})
        }
        else{
            response.json({state:false,mensaje:'fallo', info:respuesta.info})
        }
    })
}

planController.Delete = function(request,response){
 
    var post = {
        id:request.body.id
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return;
    }

    planModel.Delete(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Exito'})
        }
        else{
            response.json({state:false,mensaje:'Exito'})
        }
    })

}

module.exports.planes = planController