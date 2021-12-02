const users = require('../controllers/userController.js').users;
const plan = require('../controllers/planController').planes;


//RUTAS USUARIO
app.post('/Usuarios/Guardar',function(request,response){
   users.Save(request,response)
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

/*app.post('/Usuarios/Forgot',function(request,response){
   users.Forgot(request,response)
})*/
//LOGIN

app.post('/Usuarios/Login',function(request,response){  
   users.Login(request,response)
})  



//RUTAS PLAN
app.post('/Plan/Guardar',function(request,response){
   plan.Guardar(request,response)
})

app.post('/Plan/List',function(request,response){
   plan.List(request,response)
})

app.post('/Plan/ListId',function(request,response){
   plan.ListId(request,response)
})

app.post('/Plan/Update',function(request,response){
   plan.Update(request,response)
})

app.post('/Plan/Delete',function(request,response){
   plan.Delete(request,response)
})

