const Contenido = require('../models/contenido.models');
exports.ObtenerContenidos = async (req,res) => {
    try {
       const contenidos = await Contenido.find();
       res.json(contenidos)
    } catch (error) {
       console.log(error);
      res.status(500).send("Hubo un error");
    }    
}
exports.obtenerContenido = async (req,res) =>{
    try {
        let contenido = await Contenido.findById(req.params.id);
        if(!contenido){
            res.status(404).json({msg: 'No existe el Equipo'})
        }
        res.json(contenido);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.actuaizarEstado = async (req,res) =>{
    try {
        let contenido = await Contenido.findById(req.params.id);
        if(!contenido){
            res.status(404).json({msg: 'No existe el producto'})
            }
            contenido.state = 'visto';
            contenido = await Contenido.findOneAndUpdate({_id: req.params.id},contenido,{new: true})
            res.json(contenido)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
 exports.guardarContenido = async (req,res) => {
     try{
         let contenido;
         contenido = new Contenido(req.body);
         await contenido.save();
         res.send(contenido);

     }catch(error){
         console.log(error);
         res.status(500).send('Hubo un error');
     }
}