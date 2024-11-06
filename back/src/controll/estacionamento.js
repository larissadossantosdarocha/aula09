const con = require('../connect/connect').con;

const create = (req, res)=>{
    let cliente = req.body.cliente;
    let veiculoplaca = req.body.veiculoplaca;
    let veiculomarca = req.body.veiculomarca;
    let veiculomodelo = req.body.veiculomodelo;
    let dataentrada = req.body.dataentrada;
    let datasaida = req.body.datasaida
    

    let query = 'INSERT INTO estacionamento (cliente, veiculoplaca, veiculomarca, veiculomodelo, dataentrada, datasaida,) VALUES'
   query += `('${cliente}',' ${veiculoplaca}','${veiculomarca}','${veiculomodelo}','${dataentrada}','${datasaida}');`;
    con.query(query, (err, result)=> { 
        if(err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req,res)=>{
    con.query('SELECT * FROM estacionamento',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const update = (req,res)=>{
    con.query('UPDATE * FROM estacionamento WHERE id = ',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}




const deletar = (req, res) => {
     let id = req.params.id;
     con.query(`DELETE FROM estacionamento WHERE id = '${id}'`, (err,result) =>{
        if(err){
            res.status(400).json(err).end();
        }else{
           res.status(201).json(result)
        }
     })

    }

module.exports = {
    create,
    read,
    update,
    deletar
}