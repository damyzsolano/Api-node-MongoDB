var users = require('../controllers/userController.js').users;

app.post('/Usuarios/Guardar',function(request,response){
   users.Guardar(request,response)
})

app.post('/Usuarios/List',function(request,response){
   users.List(request,response)
})

app.post('/Usuarios/ListId',function(request,response){
   users.ListId(request,response)
})

app.post('/Usuarios/Update',function(request,response){
   users.Update(request,response)
})

app.post('/Usuarios/Delete',function(request,response){
   users.Delete(request,response)
})