const {Router} = require ("express")
const router = Router()

//rutas
router.get("/servicios", (req, res)=>{res.send("Esto es un servicio")})
router.get("/proveedor", (req, res)=>{res.send('[{"user" : "carlos", "password" : "123"}]')})
router.get("/user", (req, res)=>{res.send('[{"user" : "carlos", "password" : 123}]')})
module.exports=router