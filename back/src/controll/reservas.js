const con = require('../connect/connect').con;

const create = (req, res)=>{
    let cliente = req.body.cliente;
    let quarto = req.body.quarto;
    let datareserva = req.body.datareserva;
    let dataentrada = req.body.dataentrada;
    let datasaida = req.body.datasaida;
    let valortotal = req.body.valortotal;
    let statusreservaenum = req.body.statusreservaenum
    

    let query = 'INSERT INTO reservas (cliente, quarto, datareserva, dataentrada, datasaida, valortotal, statusreservaenum,) VALUES'
   query += `('${cliente}',' ${quarto}','${datareserva}','${dataentrada}','${datasaida}','${valortotal}','${statusreservaenum}');`;
    con.query(query, (err, result)=> { 
        if(err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req,res)=>{
    con.query('SELECT * FROM reservas',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const update = (req,res)=>{
    con.query('UPDATE * FROM reservas WHERE id = ',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}


const deletar = (req, res) => {
     let id = req.params.id;
     con.query(`DELETE FROM reservas WHERE id = '${id}'`, (err,result) =>{
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